---
authors: Vikas Sharma, Ph. D.
date: 2021-11-08
update: 2021-11-08
title: CommandLineInterface example-2
---

#  CommandLineInterface: example-2

## Class and modules

- [[CommandLineInterface_]]

## Usage

Importing the necessary modules and variables

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
CHARACTER(LEN=99) :: str1
CHARACTER(LEN=99) :: str2
INTEGER(I4B) :: int1
TYPE(CommandLineInterface_) :: cli
INTEGER(I4B) :: error
```

#CommandLineInterface/Initiate : Initiating the CLI.

```fortran
CALL cli%initiate( &
     & progname='markdownToSource', &
     & version='v21.11.0', &
     & authors='Vikas Sharma, Ph.D.', &
     & license='MIT', &
     & description='Extract code from the markdown file and create a source file.',&
     & examples=[ &
     & 'markdownToSource                                           ', &
     & 'markdownToSource -h                                        ', &
     & 'markdownToSource --input inputFile.md --output outFile.F90 ', &
     & 'markdownToSource -i inputFile.md -o outFile.F90            ', &
     & 'markdownToSource --version                                 ', &
     & 'markdownToSource -v                                        '])
```

#CommandLineInterface/Add : Adding options to CLI

```fortran
CALL cli%add(switch='--string1',switch_ab='-s1',help='name of input markdown file',&
     & required=.TRUE., act='store', error=error)
IF (error .NE. 0) CALL Display("--debug--1")
```

#CommandLineInterface/Add : Adding another option

```fortran
CALL cli%add(switch='--string2',switch_ab='-s2',help='name of output source file',&
     & required=.FALSE., act='store', def='default', error=error)
IF (error .NE. 0) THEN
    CALL Display("--debug-2")
    STOP
END IF
```

#CommandLineInterface/Get : Getting options from CLI

```fortran
CALL cli%get(switch='-s1', val=str1, error=error)
IF (error .NE. 0) THEN
    CALL Display( "--debug-3" )
    STOP
ELSE
    CALL Display(str1, "str1: ")
END IF
```

#CommandLineInterface/Get : Getting the value of option

```fortran
CALL cli%get(switch='-s2', val=str2, error=error)
IF (error .NE. 0) THEN
    CALL Display("--debug-4")
    STOP
ELSE
    CALL Display(str2, "str2: ")
END IF
```

Finishing up.

```fortran
END PROGRAM main
```
