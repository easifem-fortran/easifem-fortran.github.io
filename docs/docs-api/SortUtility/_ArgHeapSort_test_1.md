In this example we test [ArgHeapSort](ArgHeapSort.md) method.

```fortran {8}
PROGRAM main
USE easifemBase
  REAL(REAL64) :: avec(10)
  INTEGER( I4B ) :: arg(10)
  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  CALL Display( avec, msg="unsorted array", advance="NO" )
  CALL ArgHeapSort(avec, arg )
  CALL Display( arg, msg="arg", advance="NO" )
  CALL Display( avec(arg), msg="sorted array" )
  CALL blanklines()
```

<details>

<summary>See results</summary>

<div>

|unsorted array|  arg|  sorted array|
|--------------|  ---|  ------------|
|   0.22266    |   1 |    0.22266|
|   4.14185    |   5 |    1.86131|
|   1.91306    |   3 |    1.91306|
|   6.25599    |   9 |    3.14910|
|   1.86131    |   2 |    4.14185|
|   5.61020    |   7 |    4.56137|
|   4.56137    |   6 |    5.61020|
|   9.58795    |   4 |    6.25599|
|   3.14910    |   8 |    9.58795|
|   9.77462    |  10 |    9.77462|

</div>

</details>

```fortran
END PROGRAM main
```
