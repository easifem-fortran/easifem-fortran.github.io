---
authors: Vikas Sharma, Ph.
date: 2021-11-08
update: 2021-11-08
title: CommandLineInterface example-3
---

# CommandLineInterface: example-3

## Modules and Classes

- [[CommandLineInterface_]]
- [[TxtFile_]]

## Usage

!!! note ""
    Importing necessary modules and declaring variables

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(TxtFile_) :: srcfile, mdfile
CHARACTER(LEN=99) :: mdfilename
CHARACTER(LEN=99) :: srcfilename
CHARACTER(LEN=*), PARAMETER :: modname = "markdownToSource"
CHARACTER(LEN=*), PARAMETER :: myname = "main"
TYPE(CommandLineInterface_) :: cli
TYPE(ExceptionHandler_) :: e
INTEGER(I4B) :: error
```

#CommandLineInterface/Initiate

!!! example ""
    Initiating an instance of [[CommandLineInterface_]]

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

#CommandLineInterface/Add

!!! note ""
    Adding command line arguments

``` fortran
CALL cli%add(switch='--input',switch_ab='-i',help='name of input markdown file',&
     & required=.TRUE., act='store', error=error)
IF (error .NE. 0) &
     & CALL e%raiseError(modName//"::"//myName//" - "// &
     & 'cannot add value of --input from CLI')
!> handling output
CALL cli%add(switch='--output',switch_ab='-o',help='name of output source file',&
     & required=.FALSE., act='store', def='default', error=error)
IF (error .NE. 0) &
     & CALL e%raiseError(modName//"::"//myName//" - "// &
     & 'cannot add value of --output from CLI')
```

#CommandLineInterface/Get

!!! message ""
    Getting commmand line agruments

``` fortran
CALL cli%get(switch='-i', val=mdfilename, error=error)
IF (error .NE. 0) &
     & CALL e%raiseError(modName//"::"//myName//" - "// &
     & 'cannot get value of --input from CLI')
CALL e%raiseInformation(modName//"::"//myName//" - "// &
     & 'Parsing markdown file : '//TRIM(mdfilename))
CALL mdfile%Initiate(filename=mdfilename, STATUS="OLD", ACTION="READ")
CALL mdfile%OPEN()
CALL cli%get(switch='-o', val=srcfilename, error=error)
IF (error .NE. 0) &
     & CALL e%raiseError(modName//"::"//myName//" - "// &
     & 'cannot get value of --output from CLI')
IF (TRIM(srcfilename) .EQ. 'default') THEN
  srcfilename = TRIM(mdfile%getFilePath())//TRIM(mdfile%getFileName())//".F90"
END IF
CALL e%raiseInformation(modName//"::"//myName//" - "// &
& 'Results will be written to file : '//TRIM(srcfilename))
```

#TxtFile/Initiate
#TxtFile/Open
#TxtFile/ConvertMarkdownToSource

!!! note ""
	Initiating an instance of [[TxtFile_]]

``` fortran
CALL srcfile%Initiate(filename=srcfilename, status="REPLACE", &
    & ACTION="WRITE")
CALL srcfile%OPEN()
CALL mdfile%ConvertMarkdownToSource(outfile=srcfile)
CALL mdfile%Deallocate()
CALL srcfile%Deallocate()
END PROGRAM main
```
