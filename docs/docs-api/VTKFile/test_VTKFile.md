module test_m
use easifemBase
use easifemClasses
implicit none
contains

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test13
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: xv(nx1:nx2), yv(ny1:ny2), zv(nz1:nz2), &
    & x(nx1:nx2, ny1:ny2, nz1:nz2), y(nx1:nx2, ny1:ny2, nz1:nz2), &
    & z(nx1:nx2, ny1:ny2, nz1:nz2), v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: BINARY APPENDED VTS")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_binary_appended.vts", &
    & mode="NEW", DataFormat=VTK_BINARY_APPENDED, &
    & DataStructureType=VTK_StructuredGrid, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        x(i, j, k) = i * 1.0_DFP
        y(i, j, k) = j * 1.0_DFP
        z(i, j, k) = k * 1.0_DFP
        v(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2
      END DO
    END DO
  END DO
  CALL aVTKfile%WritePoints(x=x, y=y, z=z)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test12
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: xv(nx1:nx2), yv(ny1:ny2), zv(nz1:nz2), &
    & x(nx1:nx2, ny1:ny2, nz1:nz2), y(nx1:nx2, ny1:ny2, nz1:nz2), &
    & z(nx1:nx2, ny1:ny2, nz1:nz2), v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: BINARY VTS")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_binary.vts", mode="NEW",&
    & DataFormat=VTK_BINARY, DataStructureType=VTK_StructuredGrid, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        x(i, j, k) = i * 1.0_DFP
        y(i, j, k) = j * 1.0_DFP
        z(i, j, k) = k * 1.0_DFP
        v(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2
      END DO
    END DO
  END DO
  CALL aVTKfile%WritePoints(x=x, y=y, z=z)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test0
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
 REAL(DFP) :: x(nx1:nx2), y(ny1:ny2), z(nz1:nz2), v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: ASCII VTR")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_ascii.vtr", mode="NEW", &
    & DataFormat=VTK_ASCII, DataStructureType=VTK_RectilinearGrid, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])

  CALL RANDOM_NUMBER(x)
  CALL RANDOM_NUMBER(y)
  CALL RANDOM_NUMBER(z)
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        v(i, j, k) = x(i) * y(j) * z(k)
      END DO
    END DO
  END DO
  CALL aVTKfile%WritePoints(x=x, y=y, z=z)
  ! CALL aVTKfile%WriteDataArray(location=String('node'), &
  !   & action=String('open'))
  ! CALL aVTKfile%WriteDataArray( name=String("presssure"), x=v, &
  !   & numberOfComponents=1 )
  ! CALL aVTKfile%WriteDataArray( location=String('node'), &
  !   & action=String('close') )
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test10
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: BINARY APPENDED VTI")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_binary_appended.vti", &
    & mode="NEW", DataFormat=VTK_BINARY_APPENDED, &
    & DataStructureType=VTK_ImageData, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        v(i, j, k) = REAL(i * j * k, DFP)
      END DO
    END DO
  END DO
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test9
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: BINARY VTI")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_binary.vti", &
    & mode="NEW", DataFormat=VTK_BINARY, DataStructureType=VTK_ImageData, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        v(i, j, k) = REAL(i * j * k, DFP)
      END DO
    END DO
  END DO
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test8
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: ASCII VTI")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_ascii.vti", mode="NEW", &
    & DataFormat=VTK_ASCII, DataStructureType=VTK_ImageData, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        v(i, j, k) = REAL(i * j * k, DFP)
      END DO
    END DO
  END DO
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test7
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: xv(nx1:nx2), yv(ny1:ny2), zv(nz1:nz2), &
    & x(nx1:nx2, ny1:ny2, nz1:nz2), y(nx1:nx2, ny1:ny2, nz1:nz2), &
    & z(nx1:nx2, ny1:ny2, nz1:nz2), v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: BINARY APPENDED VTS")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_binary_appended.vts", &
    & mode="NEW", DataFormat=VTK_BINARY_APPENDED, &
    & DataStructureType=VTK_StructuredGrid, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        x(i, j, k) = i * 1.0_DFP
        y(i, j, k) = j * 1.0_DFP
        z(i, j, k) = k * 1.0_DFP
        v(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2
      END DO
    END DO
  END DO
  CALL aVTKfile%WritePoints(x=x, y=y, z=z)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test6
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: xv(nx1:nx2), yv(ny1:ny2), zv(nz1:nz2), &
    & x(nx1:nx2, ny1:ny2, nz1:nz2), y(nx1:nx2, ny1:ny2, nz1:nz2), &
    & z(nx1:nx2, ny1:ny2, nz1:nz2), v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: BINARY VTS")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_binary.vts", mode="NEW",&
    & DataFormat=VTK_BINARY, DataStructureType=VTK_StructuredGrid, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        x(i, j, k) = i * 1.0_DFP
        y(i, j, k) = j * 1.0_DFP
        z(i, j, k) = k * 1.0_DFP
        v(i, j, k) = x(i, j, k)**2 + y(i, j, k)**2 + z(i, j, k)**2
      END DO
    END DO
  END DO
  CALL aVTKfile%WritePoints(x=x, y=y, z=z)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

SUBROUTINE test5
  TYPE(VTKFile_) :: aVTKfile
  INTEGER( I4B ), PARAMETER :: nx1=0, nx2=9, ny1=0, ny2=5, nz1=0, nz2=5
  REAL(DFP) :: xv(nx1:nx2), yv(ny1:ny2), zv(nz1:nz2), &
    & x(nx1:nx2, ny1:ny2, nz1:nz2), y(nx1:nx2, ny1:ny2, nz1:nz2), &
    & z(nx1:nx2, ny1:ny2, nz1:nz2), v(nx1:nx2, ny1:ny2, nz1:nz2)
  INTEGER(I4B) :: i, j, k
  CALL Display("TEST :: ASCII VTS")
  CALL aVTKfile%InitiateVTKFile(filename="./vtkfile_ascii.vts", mode="NEW", &
    & DataFormat=VTK_ASCII, DataStructureType=VTK_StructuredGrid, &
    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])
  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])
  DO k = nz1, nz2
    DO j = ny1, ny2
      DO i = nx1, nx2
        x(i, j, k) = i * 1.0_DFP
        y(i, j, k) = j * 1.0_DFP
        z(i, j, k) = k * 1.0_DFP
        v(i, j, k) = REAL(i * j * k, DFP)
      END DO
    END DO
  END DO
  CALL aVTKfile%WritePoints(x=x, y=y, z=z)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  CALL aVTKfile%WriteDataArray(name=String("presssure"), x=v, &
    & numberOfComponents=1)
  CALL aVTKfile%WriteDataArray(location=String('node'), &
    & action=String('close'))
  CALL aVTKfile%WritePiece()
  CALL aVTKfile%Close()
  CALL aVTKfile%Deallocate()
END SUBROUTINE
