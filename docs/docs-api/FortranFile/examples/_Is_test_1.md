Following methods are used in this example.

- Initiate
- Open
- Close
- IsFormatted
- IsDirect
- IsPadded
- IsNew
- IsOverwrite
- IsInitiated

```fortran
program main
  use easifemBase
  use easifemClasses
  implicit none
  type(FortranFile_) :: obj
  type(String) :: astr
```

Create an instance of fortran file.

```fortran
call obj%initiate( &
  & filename="./example.txt", &
  & status='REPLACE', &
  & action='WRITE')
```

Let's get the filename, extension, and path.

```fortran
call Display( obj%isFormatted(), "isFormatted = ")
call Display( obj%isDirect(), "isDirect = ")
call Display( obj%isPadded(), "isPadded = ")
call Display( obj%isNew(), "isNew = ")
call Display( obj%isOverwrite(), "isOverwrite = ")
call Display( obj%isInitiated(), "isInitiated = ")
```

Open and close the file

```fortran
call obj%open()
call obj%close()
```

```fortran
end program main
```
