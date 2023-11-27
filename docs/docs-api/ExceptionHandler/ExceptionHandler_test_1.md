---
author: Vikas Sharma, Ph.D.
date: 9 Nov 2022
tags:
    - ExceptionHandler/SetQuietMode
    - ExceptionHandler/RaiseError
    - ExceptionHandler/RaiseInformation
    - ExceptionHandler/RaiseWarning
    - ExceptionHandler/RaiseDebug
---

# ExceptionHandler example 1

## Usage

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
```

```fortran
TYPE(ExceptionHandler_) :: e
```

- Instance of [[ExceptionHandler_]]

```fortran
CHARACTER(LEN=*), PARAMETER :: modname = "ExceptionHandler_test_1.F90"
CHARACTER(LEN=*), PARAMETER :: myname = "main()"
```

Set quite mode off, [[ExceptionHandler_#SetQuiteMode]].

```fortran
CALL e%setQuietMode(.FALSE.)
```

- [[ExceptionHandler_#RaiseInformation]]

```fortran
CALL e%raiseInformation(modName//"::"//myName//" - "// &
     & 'Hello world')
```

Result:

[💚 INFORMATION ✅]
  [🚀 Module ] ExceptionHandler_test_1.F90
  [🎇 Method ] main()
  [🔊 Message] Hello world

- [[ExceptionHandler_#RaiseWarning]]

```fortran
CALL e%raiseWarning(modName//"::"//myName//" - "// &
     & 'Hello world')
```

[⚠ WARNING ❗]
  [🚀 Module ] ExceptionHandler_test_1.F90
  [🎇 Method ] main()
  [🔊 Message] Hello world

- [[ExceptionHandler_#RaiseDebug]]

```fortran
CALL e%raiseDebug(modName//"::"//myName//" - "// &
     & 'Hello world')
```

[❓ DEBUG 🐛]
  [🚀 Module ] ExceptionHandler_test_1.F90
  [🎇 Method ] main()
  [🔊 Message] Hello world

- [[ExceptionHandler_#RaiseError]]

```fortran
CALL e%raiseError(modName//"::"//myName//" - "// &
     & 'Hello world')
```

[❎ ERROR ⛔]
  [🚀 Module ] ExceptionHandler_test_1.F90
  [🎇 Method ] main()
  [🔊 Message] Hello world

```fortran
END PROGRAM main
```
