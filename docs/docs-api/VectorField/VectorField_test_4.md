---
title: VectorField example 4
author: Vikas Sharma, Ph.D.
date: 29 Nov 2021
update: 29 Nov 2021
tags:
    - VectorField
---

# VectorField example 4

## Usage

```fortran
program main
    use easifemBase
    use easifemClasses
    implicit none
    type( domain_ ) :: dom
    type( VectorField_ ) :: obj
    type( ScalarField_ ) :: scalarObj
    type( HDF5File_ ) :: meshfile
    type( ParameterList_ ) :: param
    integer( i4b ) :: ierr
    real( DFP ), ALLOCATABLE :: real1( : ), real2( :, : )
    real( DFP ) :: real0

    CALL FPL_INIT()
    CALL param%initiate()
    CALL SetVectorFieldParam(param=param, &
        & name="U", &
        & fieldType=FIELD_TYPE_NORMAL, &
        & spaceCompo=3 )
    call meshfile%initiate( filename="./mesh.h5", mode="READ" )
    call meshfile%open()
    call dom%initiate( meshfile, group="" )

    call obj%initiate( param, dom )
    call obj%set( globalNode = 10, value= 10.0_DFP*[1,2,3] )
    call obj%get( globalNode = 10, value = real1 )
    call display( real1, "test-1: get() = " )

    call obj%set( value= -10.0_DFP, spaceCompo=1 )
    call obj%set( value= -20.0_DFP, spaceCompo=2 )
    call obj%set( value= -30.0_DFP, spaceCompo=3 )
    call obj%get( value = real1, spaceCompo = 1 )
    call display( real1, "test-2: get() = " )

    call reallocate( real2, 3, 4 )
    real2( :, 1 ) = [1,2,3]
    real2( :, 2 ) = [4,5,6]
    real2( :, 3 ) = [7,8,9]
    real2( :, 4 ) = [10,11,12]
    call obj%set( value=real2, globalNode=[3,5,7,9])
    call obj%get( value=real2, globalNode=[3,5,7,9])
    call display( real2, "test-3: get() = ")

    call obj%get( value=real1, globalNode=[3,5,7,9], spaceCompo=1)
    call display( real1, "test-4: get() = ")

    call obj%get( value=real0, globalNode=5, spaceCompo=1)
    call display( real0, "test-5: get() = ")
    call obj%get( value=real0, globalNode=5, spaceCompo=2)
    call display( real0, "test-5: get() = ")
    call obj%get( value=real0, globalNode=5, spaceCompo=3)
    call display( real0, "test-5: get() = ")

    call obj%Deallocate()
    call dom%Deallocate()
    call meshfile%close()
    call meshfile%Deallocate()
    call param%Deallocate()
    call FPL_FINALIZE()
end program main
```
