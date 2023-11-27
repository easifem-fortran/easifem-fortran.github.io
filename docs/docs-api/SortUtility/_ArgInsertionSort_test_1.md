In this example we test ArgInsertionSort.

```fortran {9}
PROGRAM main
USE easifemBase
  REAL(REAL64) :: avec(10)
  INTEGER( I4B ) :: arg(10)
  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  arg = arange(1, 10, 1)
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  CALL ArgInsertionSort(avec, arg, 1, size(arg))
  CALL Display( arg, msg="arg", advance="NO", full=.true. )
  CALL Display( avec(arg), msg="sorted array", full=.true. )
  CALL blanklines()
```

<details>

<summary>See results</summary>

<div>

```txt title="results"
unsorted array,  arg,  sorted array
--------------,  ---,  ------------
   9.74747    ,   8 ,    0.73612   
   6.28162    ,  10 ,    0.96830   
   7.10011    ,   6 ,    1.11567   
   1.87641    ,   4 ,    1.87641   
   6.14801    ,   9 ,    2.89498   
   1.11567    ,   5 ,    6.14801   
   9.07674    ,   2 ,    6.28162   
   0.73612    ,   3 ,    7.10011   
   2.89498    ,   7 ,    9.07674   
   0.96830    ,   1 ,    9.74747   
```

</div>

</details>

```fortran
END PROGRAM main
```
