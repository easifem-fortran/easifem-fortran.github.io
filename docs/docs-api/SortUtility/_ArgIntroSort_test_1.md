In this example we test ArgIntroSort.

```fortran
PROGRAM main
USE easifemBase
  REAL(REAL64) :: avec(10)
  INTEGER( I4B ) :: arg(10)
  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  arg=arange(1,10,1)
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  CALL ArgIntroSort(avec, arg )
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
   5.54368    ,   3 ,    0.81292   
   6.02586    ,  10 ,    2.87233   
   0.81292    ,   9 ,    3.91444   
   7.37413    ,   1 ,    5.54368   
   7.36096    ,   2 ,    6.02586   
   9.06920    ,   5 ,    7.36096   
   9.95400    ,   4 ,    7.37413   
   8.88093    ,   8 ,    8.88093   
   3.91444    ,   6 ,    9.06920   
   2.87233    ,   7 ,    9.95400   
```

</div>

</details>

```fortran
END PROGRAM main
```
