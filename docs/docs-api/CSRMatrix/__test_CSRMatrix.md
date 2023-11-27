! This program is a part of EASIFEM library
! Copyright (C) 2020-2021  Vikas Sharma, Ph.D
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>
!

MODULE test_m
USE BaseMethod
IMPLICIT NONE
CONTAINS

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------



!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine testFIDAPM005
! subroutine test0
  type( csrmatrix_ ) :: obj, obj2, pmat, pmat2
  type( sparseMatrixReOrdering_ ) :: reorder
  call display( colorize( "TESTING NestedDissect", color_fg="red" ) )
  call import( obj, "./matrixMarket/fidap005.mtx", SPARSE_FMT_COO )
  call spy( obj, "FIDAP005_BEFORE" )
  call getILUD( obj=obj, Pmat=pmat, alpha=1.0_DFP, droptol=0.001_DFP )
  call spy( pmat, "FIDAP005_ILUD_BEFORE" )
  call NestedDissect( reorder=reorder, csrMat=obj )
  obj2 = Permute( obj, reorder, reorder )
  call spy( obj2, "FIDAP005_AFTER" )
  call getILUD( obj=obj2, Pmat=pmat2, alpha=1.0_DFP, droptol=0.001_DFP )
  call spy( pmat2, "FIDAP005_ILUD_AFTER" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

! subroutine testFIDAPM05
subroutine test0
  type( csrmatrix_ ) :: obj, obj2, pmat, pmat2
  type( sparseMatrixReOrdering_ ) :: reorder
  call display( colorize( "TESTING NestedDissect", color_fg="red" ) )
  call import( obj, "./matrixMarket/fidapm05.mtx", SPARSE_FMT_COO )
  call SPY( obj, "FIDAPM05_BEFORE" )
  call getILUD( obj=obj, Pmat=pmat, alpha=1.0_DFP, droptol=0.001_DFP )
  call SPY( pmat, "FIDAPM05_ILUD_BEFORE" )
  call NestedDissect( reorder=reorder, csrMat=obj )
  obj2 = Permute( obj, reorder, reorder )
  call SPY( obj2, "FIDAPM05_AFTER" )
  call getILUD( obj=obj2, Pmat=pmat2, alpha=1.0_DFP, droptol=0.001_DFP )
  call SPY( pmat2, "FIDAPM05_ILUD_AFTER" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test22
  type( csrmatrix_ ) :: obj, obj2
  type( dof_ ) :: dofobj
  type( realMatrix_ ) :: rmat
  type( sparseMatrixReOrdering_ ) :: reorder

  call display( colorize( "TESTING NestedDissect", color_fg="red" ) )
  call initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[1], timeCompo=[1], storageFMT=DOF_FMT )
  call initiate( obj, ncol=12*1, nrow=12*1, dof=dofobj )
  call setsparsity( obj, 1, [1,2,6,5] )
  call setsparsity( obj, 2, [2,1,3,5,6,7] )
  call setsparsity( obj, 3, [3,2,4,6,7,8] )
  call setsparsity( obj, 4, [4,3,7,8] )
  call setsparsity( obj, 5, [5,1,9,2,6,10] )
  call setsparsity( obj, 6, [6,2,10,1,5,9,3,7,11] )
  call setsparsity( obj, 7, [7,6,8,2,3,4,10,11,12] )
  call setsparsity( obj, 8, [8,4,12,3,7,11] )
  call setsparsity( obj, 9, [9,5,6,10] )
  call setsparsity( obj, 10, [10,9,11,5,6,7] )
  call setsparsity( obj, 11, [11,10,12,6,7,8] )
  call setsparsity( obj, 12, [12,7,8,11] )
  call setSparsity(obj)
  call SPY( obj, "sparse-before-nd" )
  call NestedDissect( reorder=reorder, csrMat=obj )
  obj2 = Permute( obj, reorder, reorder )
  call SPY( obj2, "sparse-after-nd" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test21
  type( csrmatrix_ ) :: obj, obj2
  type( csrSparsity_ ) :: csr
  type( dof_ ) :: dofobj
  integer( i4b ) :: ii, nbr, jj, kk
  integer( i4b ), allocatable :: xadj( : ), adjncy( : ), perm( : ), iperm( : )
  type( realMatrix_ ) :: rmat

  call display( colorize( "TEST : SET and ADD Method ", color_fg="red" ) )
  call display( colorize( "       StorageFMT = DOF_FMT",color_fg="blue" ))

  call initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[3], timeCompo=[1], storageFMT=DOF_FMT )
  call initiate( obj, ncol=12*3, nrow=12*3, dof=dofobj )
  call setsparsity( obj, 1, [1,2,6,5] )
  call setsparsity( obj, 2, [2,1,3,5,6,7] )
  call setsparsity( obj, 3, [3,2,4,6,7,8] )
  call setsparsity( obj, 4, [4,3,7,8] )
  call setsparsity( obj, 5, [5,1,9,2,6,10] )
  call setsparsity( obj, 6, [6,2,10,1,5,9,3,7,11] )
  call setsparsity( obj, 7, [7,6,8,2,3,4,10,11,12] )
  call setsparsity( obj, 8, [8,4,12,3,7,11] )
  call setsparsity( obj, 9, [9,5,6,10] )
  call setsparsity( obj, 10, [10,9,11,5,6,7] )
  call setsparsity( obj, 11, [11,10,12,6,7,8] )
  call setsparsity( obj, 12, [12,7,8,11] )
  call setSparsity(obj)
  call SPY( obj, "sparse-before-nd" )

  call reallocate( xadj, size( obj, 1 ) + 1 )
  call reallocate( adjncy, getNNZ( obj ) )

  xadj( 1 ) = 1
  kk=0
  DO ii = 1, size( xadj  )-1
    nbr = 0
    DO jj = obj%csr%IA( ii ), obj%csr%IA( ii+1 ) - 1
      IF( obj%csr%JA( jj ) .NE. ii ) THEN
        nbr = nbr + 1
        kk = kk + 1
        adjncy( kk ) = obj%csr%JA( jj )
      END IF
    END DO
    xadj( ii+1 ) = xadj( ii ) + nbr
  END DO

  ADJNCY = ADJNCY( 1:XADJ( size( xadj ) ) - 1 )
  CALL reallocate( perm, size( obj, 1 ), iperm, size( obj, 1 ) )
  CALL MetisNodeND( XADJ=XADJ, ADJNCY=ADJNCY, PERM=PERM, IPERM=IPERM )
  CALL Disp( x=PERM, title="PERM=", advance="NO", unit=stdout, style='left' )
  CALL Disp( x=IPERM, title="IPERM=", advance="DOUBLE", unit=stdout, style='left' )

  csr = obj%csr
  CALL initiate(obj=obj2, csr=csr )
  ! CALL setSparsity( obj2 )

  CALL CPERM( size(obj,1),obj%a,obj%csr%ja,obj%csr%ia,obj2%a,obj2%csr%ja,obj2%csr%ia,iperm,1)
  CALL RPERM( size(obj,1),obj%a,obj%csr%ja,obj%csr%ia,obj2%a,obj2%csr%ja,obj2%csr%ia,iperm,1)
  call SPY( obj2, "sparse-after-nd" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test20
  TYPE( CSRMatrix_ ) :: obj
  INTEGER( i4b ) :: i
  REAL( DFP ), ALLOCATABLE :: x( : ), y( : )
  REAL( DFP ), ALLOCATABLE :: Amat( :, : )

  CALL Display( 'testing ILUD')
  CALL Initiate( obj=obj, &
    & A=1.0_DFP*[10,-1,-2,11,-3,-4,12,-5,13,14,-9,-8], &
    & IA=[1,3,6,9,10,13], &
    & JA=[1,4,1,2,4,2,3,5,4,5,3,2] )
  Amat = obj
  x = MATMUL( Amat, [1.0_DFP, 2.0_DFP, 3.0_DFP, 0.0_DFP, 0.0_DFP] )
  ALLOCATE( y( 5 ) )
  CALL MATVEC( obj=obj, x=[1.0_DFP, 2.0_DFP, 3.0_DFP, 0.0_DFP, 0.0_DFP], y=y )
  CALL Display( x, " Exact AX = " )
  CALL Display( y, " AX = " )
  CALL Deallocate( obj )
end subroutine


!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test19
  type( csrmatrix_ ) :: obj
  type( dof_ ) :: dofobj
  integer( i4b ) :: i
  real( dfp ) :: val( 8, 8 )

  call display( colorize( "TEST : SET and ADD Method ", color_fg="red" ) )
  call display( colorize( "       StorageFMT = DOF_FMT",color_fg="blue" ))

  call initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[2], timeCompo=[1], storageFMT=DOF_FMT )
  call initiate( obj, ncol=12*2, nrow=12*2, dof=dofobj )
  call setsparsity( obj, 1, [1,2,6,5] )
  call setsparsity( obj, 2, [2,1,3,5,6,7] )
  call setsparsity( obj, 3, [3,2,4,6,7,8] )
  call setsparsity( obj, 4, [4,3,7,8] )
  call setsparsity( obj, 5, [5,1,9,2,6,10] )
  call setsparsity( obj, 6, [6,2,10,1,5,9,3,7,11] )
  call setsparsity( obj, 7, [7,6,8,2,3,4,10,11,12] )
  call setsparsity( obj, 8, [8,4,12,3,7,11] )
  call setsparsity( obj, 9, [9,5,6,10] )
  call setsparsity( obj, 10, [10,9,11,5,6,7] )
  call setsparsity( obj, 11, [11,10,12,6,7,8] )
  call setsparsity( obj, 12, [12,7,8,11] )
  call setSparsity(obj)
  obj = 2.0_DFP
  call display( obj, "obj" )
  call SPY( obj, "example" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test18
  type( csrmatrix_ ) :: obj
  type( dof_ ) :: dofobj
  integer( i4b ) :: i
  real( dfp ) :: val( 8, 8 )
  real( dfp ), allocatable :: r1( : )
  type( RealMatrix_ ) :: realMat

  call display( colorize( "TEST : SET and ADD Method ", color_fg="red" ) )
  call display( colorize( "       StorageFMT = NODES_FMT",color_fg="blue" ))

  call initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[2], timeCompo=[1], storageFMT=NODES_FMT )
  call initiate( obj, ncol=12*2, nrow=12*2, dof=dofobj )
  call setsparsity( obj, 1, [1,2,6,5] )
  call setsparsity( obj, 1, [1,2,6,5] )
  call setsparsity( obj, 2, [2,1,3,5,6,7] )
  call setsparsity( obj, 3, [3,2,4,6,7,8] )
  call setsparsity( obj, 4, [4,3,7,8] )
  call setsparsity( obj, 5, [5,1,9,2,6,10] )
  call setsparsity( obj, 6, [6,2,10,1,5,9,3,7,11] )
  call setsparsity( obj, 7, [7,6,8,2,3,4,10,11,12] )
  call setsparsity( obj, 8, [8,4,12,3,7,11] )
  call setsparsity( obj, 9, [9,5,6,10] )
  call setsparsity( obj, 10, [10,9,11,5,6,7] )
  call setsparsity( obj, 11, [11,10,12,6,7,8] )
  call setsparsity( obj, 12, [12,7,8,11] )
  call setSparsity(obj)
  ! call RANDOM_NUMBER( val )
  val =  eye( 8 )
  call add( obj=obj, nptrs=[1,2,6,5], val=val, storageFMT=DOF_FMT, scale=1.0_DFP )
  call add( obj=obj, nptrs=[1,2,6,5], val=val, storageFMT=DOF_FMT, scale=1.0_DFP )
  obj = 2.0_DFP
  call reallocate( r1, size( obj, 2 ) )
  call getRow( obj=obj, irow=4, val=r1 )
  call display( r1, 'row4 = ')
  call reallocate( r1, size( obj, 1 ) )
  call getColumn( obj=obj, icolumn=4, val=r1 )
  call display( r1, 'col4 = ')
  call set( obj=obj, irow=12, icolumn=12, val=100.0_DFP )
  call display(obj, "obj=")
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test17
  type( csrmatrix_ ) :: obj
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA, JU
  type( RealVector_ ) :: A, rhs, sol
  type( RealMatrix_ ) :: Amat
  !
  CALL display( 'testing ILUD')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  Amat%val = obj
  rhs = MATMUL( Amat, [1.0_DFP, 2.0_DFP, 3.0_DFP, 0.0_DFP, 0.0_DFP] )
  call display( rhs, "rhs = ")
  deallocate(A%val, JA%val)
  call getILUD( obj, A%val, JA%val, JU%val, 0.0_DFP, 1.0D-8 )
  call initiate( sol, 5 )
  call LUSOLVE( sol=sol%val, rhs=rhs%val, alu=a%val, jlu=ja%val, ju=ju%val)
  call display( sol, "solution = ")
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test16
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA, JU, IPERM
  type( RealVector_ ) :: A
  type( RealMatrix_ ) :: Amat
  !
  CALL display( 'testing ILUDP')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,0.1,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getILUDP( obj, obj2, 0.0_DFP, 1.0D-8, 0.1_DFP, 5, IPERM%val )
  Amat%val=obj2
  call display( Amat, "ILUDP = " )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test15
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA, JU
  type( RealVector_ ) :: A
  type( RealMatrix_ ) :: Amat
  !
  CALL display( 'testing ILUD')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getILUD( obj, obj2, 0.0_DFP, 1.0D-8 )
  Amat%val=obj2
  call display( Amat, "ILUD = " )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test14
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA, JU, IPERM
  type( RealVector_ ) :: A
  type( RealMatrix_ ) :: Amat
  !
  CALL display( 'testing ILUTP')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,0.1,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getILUTP( obj, obj2, 5, 1.0D-8, 0.1_DFP, 5, IPERM%val )
  Amat%val=obj
  call display( Amat, "SparseMatrix after ILUTP call = " )
  call display( IPERM, "IPERM = " )
  Amat%val=obj2
  call display( Amat, "ILUTP = " )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test13
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA, JU, IPERM
  type( RealVector_ ) :: A
  type( RealMatrix_ ) :: Amat
  !
  CALL display( 'testing ILUTP')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call display( obj, "Sparse matrix = " )
  call getILUTP( obj, A%val, JA%val, JU%val, 5, 1.0D-8, 0.0_DFP, 6, IPERM%val )
  call display( A, "A = ")
  call display( JA, "JA = ")
  call display( JU, "JU = ")
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test12
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA, JU
  type( RealVector_ ) :: A
  type( RealMatrix_ ) :: Amat
  !
  CALL display( 'testing ILUT')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getILUT( obj, obj2, 5, 1.0D-8 )
  ! call display( obj2, "Sparse matrix = " )
  Amat%val = obj2
  call display( Amat, "LU Sparse matrix = " )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test11
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA, JU
  type( RealVector_ ) :: A
  CALL display( 'testing ILUT')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call display( obj, "Sparse matrix = " )
  call getILUT( obj, A%val, JA%val, JU%val, 5, 1.0D-8 )
  call display( A, "A = ")
  call display( JA, "JA = ")
  call display( JU, "JU = ")
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test10
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing getLowerTriangle')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getLowerTriangle( obj, obj2 )
  call display( obj2, "Lower triangle part = " )
  call getUpperTriangle( obj, obj2 )
  call display( obj2, "Upper triangle part = " )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test9
  type( csrmatrix_ ) :: obj
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing getDiagonal')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getDiagonal( obj=obj, diag=A%val, idiag=IA%val, offset=0 )
  call display( A, "diag=")
  call display( IA, "idiag=")
  call getDiagonal( obj=obj, diag=A%val, idiag=IA%val, offset=-1 )
  call display( A, "diag=")
  call display( IA, "idiag=")
  call getDiagonal( obj=obj, diag=A%val, idiag=IA%val, offset=2 )
  call display( A, "diag=")
  call display( IA, "idiag=")
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test8
  type( csrmatrix_ ) :: obj
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing TRANSPOSE')
  IA = [1,3,6,9]
  JA = [1,4,1,2,4,2,3,5]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getTranspose(obj)
  call display( obj, "obj=" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test7
  type( csrmatrix_ ) :: obj
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing TRANSPOSE')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call getTranspose(obj)
  call display( obj, "obj=" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test6
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing DropEntry IA, JA, A')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  ! call setSparsity(obj) !! Not required
  call DropEntry(objIn=obj, objOut=obj2, dropTol=4.0_DFP)
  call display( obj2, "obj2=" )
  call DropEntry(objIn=obj, objOut=obj, dropTol=4.0_DFP)
  call display( obj, "obj=" )
  call Deallocate( obj )
  call Deallocate( obj2 )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test5
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing unary using IA, JA, A')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  ! call setSparsity(obj) !! Not required
  call initiate(obj=obj2, obj2=obj, i1=1, i2=2, j1=1, j2=5)
  call setSparsity( obj2 )
  call display( obj2, "obj2=" )
  call Deallocate( obj )
  call Deallocate( obj2 )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test4
  type( csrmatrix_ ) :: obj, obj2
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing unary using IA, JA, A')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  !call setSparsity(obj) !! Not required
  call display( get( obj, 1,1) .APPROXEQ. 10.0_DFP, "test 1 : ")
  call display( get( obj, 5,3) .APPROXEQ. -9.0_DFP, "test 2 : ")

  call initiate(obj=obj2, obj2=obj, i1=1, i2=5, j1=1, j2=5)
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test3
  type( csrmatrix_ ) :: obj
  integer( i4b ) :: i
  type( IntVector_ ) :: IA, JA
  type( RealVector_ ) :: A
  CALL display( 'testing csr matrix constructor using IA, JA, A')
  IA = [1,3,6,9,10,13]
  JA = [1,4,1,2,4,2,3,5,4,5,3,2]
  A = 1.0_DFP*[10.0,-1.0,-2.0,11.0,-3.0,-4.0,12.0,-5.0,13.0,14.0,-9.0,-8.0]
  call initiate( obj=obj, A=A%val, IA=IA%val, JA=JA%val )
  call setSparsity(obj)
  call display( obj, "obj" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test2
  type( csrmatrix_ ) :: obj
  type( csrSparsity_ ) :: csr
  type( dof_ ) :: dofobj
  integer( i4b ) :: i, unitNo
  !
  call initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT )
  call initiate( csr, ncol=12, nrow=12, dof=dofobj )
  call setsparsity( csr, 1, [1,2,6,5] )
  call setsparsity( csr, 2, [2,1,3,5,6,7] )
  call setsparsity( csr, 3, [3,2,4,6,7,8] )
  call setsparsity( csr, 4, [4,3,7,8] )
  call setsparsity( csr, 5, [5,1,9,2,6,10] )
  call setsparsity( csr, 6, [6,2,10,1,5,9,3,7,11] )
  call setsparsity( csr, 7, [7,6,8,2,3,4,10,11,12] )
  call setsparsity( csr, 8, [8,4,12,3,7,11] )
  call setsparsity( csr, 9, [9,5,6,10] )
  call setsparsity( csr, 10, [10,9,11,5,6,7] )
  call setsparsity( csr, 11, [11,10,12,6,7,8] )
  call setsparsity( csr, 12, [12,7,8,11] )
  call setSparsity( csr )
  call initiate( obj=obj, csr=csr )
  call setSparsity(obj)
  obj = 2.0_DFP
  call display( obj, "obj" )
  call Deallocate( obj )
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test1
  type( csrmatrix_ ) :: obj
  type( dof_ ) :: dofobj
  integer( i4b ) :: i, unitNo

  call initiate( obj=dofobj, tNodes=[12], names=['K'], &
    & spaceCompo=[1], timeCompo=[1], storageFMT=NODES_FMT )
  call initiate( obj, ncol=12, nrow=12, dof=dofobj )
  call setsparsity( obj, 1, [1,2,6,5] )
  call setsparsity( obj, 2, [2,1,3,5,6,7] )
  call setsparsity( obj, 3, [3,2,4,6,7,8] )
  call setsparsity( obj, 4, [4,3,7,8] )
  call setsparsity( obj, 5, [5,1,9,2,6,10] )
  call setsparsity( obj, 6, [6,2,10,1,5,9,3,7,11] )
  call setsparsity( obj, 7, [7,6,8,2,3,4,10,11,12] )
  call setsparsity( obj, 8, [8,4,12,3,7,11] )
  call setsparsity( obj, 9, [9,5,6,10] )
  call setsparsity( obj, 10, [10,9,11,5,6,7] )
  call setsparsity( obj, 11, [11,10,12,6,7,8] )
  call setsparsity( obj, 12, [12,7,8,11] )
  call setSparsity(obj)
  obj = 2.0_DFP
  OPEN( NEWUNIT=unitNo, FILE="example.ps", &
    & STATUS="REPLACE", ACTION="WRITE" )
  call display( obj, "obj" )
  call Deallocate( obj )
end subroutine

END MODULE test_m

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

program main
use test_m
implicit none
call test0
end program main
