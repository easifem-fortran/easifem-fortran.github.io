This example is modern fortran version of F77 `sssimp.f` which is located at [ARPACK-NG](https://github.com/opencollab/arpack-ng).

```fortran title="helper module"
module helper
implicit none
private
public :: av, tv
contains
subroutine av(nx, v, w)
  integer :: nx
  real :: v(nx * nx), w(nx * nx)
  real :: h2
  integer :: j, lo, n2
  real, parameter :: one = 1.0E+0
  call tv(nx, v(1), w(1))
  call saxpy(nx, -one, v(nx + 1), 1, w(1), 1)
  do j = 2, nx - 1
    lo = (j - 1) * nx
    call tv(nx, v(lo + 1), w(lo + 1))
    call saxpy(nx, -one, v(lo - nx + 1), 1, w(lo + 1), 1)
    call saxpy(nx, -one, v(lo + nx + 1), 1, w(lo + 1), 1)
  end do
  lo = (nx - 1) * nx
  call tv(nx, v(lo + 1), w(lo + 1))
  call saxpy(nx, -one, v(lo - nx + 1), 1, w(lo + 1), 1)
  n2 = nx * nx
  h2 = one / real((nx + 1) * (nx + 1))
  call sscal(n2, one / h2, w, 1)
end subroutine av
```

```fortran
subroutine tv(nx, x, y)
  integer :: nx, j
  real :: x(nx), y(nx), dd, dl, du
  real, parameter :: one = 1.0E+0, four = 4.0E+0
  !
  ! Compute the matrix vector multiplication
  ! y<---T*x
  ! where T is a nx by nx tridiagonal matrix with DD on the
  ! diagonal, DL on the subdiagonal, and DU on the superdiagonal.
  !
  dd = four
  dl = -one
  du = -one
  !
  y(1) = dd * x(1) + du * x(2)
  !
  do j = 2, nx - 1
    y(j) = dl * x(j - 1) + dd * x(j) + du * x(j + 1)
  end do
  !
  y(nx) = dl * x(nx - 1) + dd * x(nx)
  return
end subroutine tv
end module helper
```

```fortran title="main program"
program main
use helper
implicit none
integer, parameter :: maxn = 256, maxnev = 10, maxncv = 25
integer, parameter :: ldv = maxn
real :: v(ldv, maxncv), workl(maxncv * (maxncv + 8)), &
  & workd(3 * maxn), d(maxncv, 2), resid(maxn), ax(maxn)
logical :: select(maxncv)
integer :: iparam(11), ipntr(11)
character :: bmat * 1, which * 2
integer :: ido, n, nev, ncv, lworkl, info, ierr
integer :: j, nx, ishfts, maxitr, mode1, nconv
logical :: rvec
real :: tol, sigma
real :: zero = 0.0
integer :: logfil, ndigit, &
  & msaupd, msaup2, msaitr, mseigt, msapps, msgets, mseupd
ndigit = -3
logfil = 6
msgets = 0
msaitr = 0
msapps = 0
msaupd = 1
msaup2 = 0
mseigt = 0
mseupd = 0
nx = 10
n = nx * nx
nev = 4
ncv = 20
bmat = 'I'
which = 'LM'
if (n .gt. maxn) then
  print *, ' ERROR with _SSIMP: N is greater than MAXN '
  stop
else if (nev .gt. maxnev) then
  print *, ' ERROR with _SSIMP: NEV is greater than MAXNEV '
  stop
else if (ncv .gt. maxncv) then
  print *, ' ERROR with _SSIMP: NCV is greater than MAXNCV '
  stop
end if
lworkl = ncv * (ncv + 8)
tol = zero
info = 0
ido = 0
ishfts = 1
maxitr = 300
mode1 = 1
iparam(1) = ishfts
iparam(3) = maxitr
iparam(7) = mode1
```

```fortran
do
  call ssaupd(ido, bmat, n, which, nev, tol, resid, &
    & ncv, v, ldv, iparam, ipntr, workd, workl,  &
    & lworkl, info)
  !!
  if (info .lt. 0) then
    print *, ' '
    print *, ' Error with _saupd, info = ', info
    print *, ' Check documentation in _saupd '
    print *, ' '
    EXIT
  END IF
  !!
  if (info .eq. 1) then
        !!
    print *, ' '
    print *, ' Maximum number of iterations reached.'
    print *, ' '
        !!
  else if (info .eq. 3) then
        !!
    print *, ' '
    print *, ' No shifts could be applied during implicit', &
      & ' Arnoldi update, try increasing NCV.'
    print *, ' '
        !!
  end if
  !!
  if (ido .eq. -1 .or. ido .eq. 1) then
    call av(nx, workd(ipntr(1)), workd(ipntr(2)))
  ELSE
    EXIT
  end if
end do
```

```fortran title="calling SSEUPD"
rvec = .true.
!!
call sseupd( &
  & rvec, 'All', select, d, v, ldv, sigma, &
  & bmat, n, which, nev, tol, resid, ncv, v, ldv, &
  & iparam, ipntr, workd, workl, lworkl, ierr)
!!
if (ierr .ne. 0) then
  !!
  print *, ' '
  print *, ' Error with _seupd, info = ', ierr
  print *, ' Check the documentation of _seupd. '
  print *, ' '
  !!
else
  !!
  nconv = iparam(5)
  !!
  do j = 1, nconv
    !!
    call av(nx, v(1, j), ax)
    call saxpy(n, -d(j, 1), v(1, j), 1, ax, 1)
    d(j, 2) = NORM2(ax)
    d(j, 2) = d(j, 2) / abs(d(j, 1))
    !!
  end do
  !!
  call smout(6, nconv, 2, d, maxncv, -6, &
    & 'Ritz values and relative residuals')
  !!
end if
print *, ' '
print *, ' _SSIMP '
print *, ' ====== '
print *, ' '
print *, ' Size of the matrix is ', n
print *, ' The number of Ritz values requested is ', nev
print *, ' The number of Arnoldi vectors generated', &
  & ' (NCV) is ', ncv
print *, ' What portion of the spectrum: ', which
print *, ' The number of converged Ritz values is ', &
  & nconv
print *, ' The number of Implicit Arnoldi update', &
  & ' iterations taken is ', iparam(3)
print *, ' The number of OP*x is ', iparam(9)
print *, ' The convergence criterion is ', tol
print *, ' '
end program main
```
