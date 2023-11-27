---
authors: Vikas Sharma, Ph. D.
date: 2021-11-08
update: 2021-11-08
title: CommandLineInterface example-1
---

# Testing CommandLineInterface: example-1

## Class and modules

- [[CommandLineInterface_]]

## Usage

!!! note ""
    Import modules

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
```

Declare variables

```fortran
TYPE(CommandLineInterface_) :: obj
CHARACTER(99) :: chars
INTEGER :: error
```

#CommandLineInterface/Initiate initiate an instance

```fortran
CALL obj%Initiate(description='minimal example')
```

#CommandLineInterface/Add add an option

```fortran
CALL obj%add(switch='--string',  switch_ab='-s',  help='a string', required=.TRUE., &
     & act='store', error=error)
```

check error

```fortran
IF (error /= 0) STOP
```


#CommandLineInterface/Get get the value of an option

```fortran
CALL obj%get(switch='-s', val=chars, error=error)
```

check error

```fortran
IF (error /= 0) STOP
```

print results and clean up

```fortran
PRINT '(A)', obj%progname//' has been called with the following argument:'
PRINT '(A)', 'chars = '//TRIM(ADJUSTL(chars))
CALL obj%Deallocate()
END PROGRAM main
```
