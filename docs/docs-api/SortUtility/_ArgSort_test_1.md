In this example we test ArgSort.

```fortran {8}
PROGRAM main
USE easifemBase
  REAL(REAL64) :: avec(10)
  INTEGER( I4B ) :: arg(10)
  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  arg = ArgSort(avec, "QuickSort" )
  CALL Display( arg, msg="arg", advance="NO", full=.true. )
  CALL Display( avec(arg), msg="QuickSort array", full=.true. )
  CALL blanklines()
```

<details>

<summary>See results</summary>

<div>

```txt title="results"

unsorted array,  arg,  QuickSort array
--------------,  ---,  ---------------
   7.30120    ,   8 ,      0.87296    
   8.24763    ,   9 ,      1.15776    
   4.60741    ,   6 ,      3.04890    
   9.83271    ,   7 ,      3.84105    
   6.10712    ,   3 ,      4.60741    
   3.04890    ,   5 ,      6.10712    
   3.84105    ,  10 ,      6.86604    
   0.87296    ,   1 ,      7.30120    
   1.15776    ,   2 ,      8.24763    
   6.86604    ,   4 ,      9.83271    
```

</div>

</details>

```fortran
  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  arg = ArgSort(avec, "HeapSort" )
  CALL Display( arg, msg="arg", advance="NO", full=.true. )
  CALL Display( avec(arg), msg="HeapSort array", full=.true. )
  CALL blanklines()
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
unsorted array,  arg,  HeapSort array
--------------,  ---,  --------------
   8.48137    ,   6 ,     0.37175    
   1.67719    ,   8 ,     1.36706    
   6.57749    ,   2 ,     1.67719    
   3.51411    ,  10 ,     1.75177    
   2.07800    ,   5 ,     2.07800    
   0.37175    ,   4 ,     3.51411    
   7.49388    ,   3 ,     6.57749    
   1.36706    ,   9 ,     6.62953    
   6.62953    ,   7 ,     7.49388    
   1.75177    ,   1 ,     8.48137    
```

</div>
</details>

```fortran
  CALL RANDOM_NUMBER(avec)
  avec = avec * 10
  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )
  arg = ArgSort(avec, "IntroSort" )
  CALL Display( arg, msg="arg", advance="NO", full=.true. )
  CALL Display( avec(arg), msg="IntroSort array", full=.true. )
  CALL blanklines()
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
unsorted array,  arg,  IntroSort array
--------------,  ---,  ---------------
   8.14589    ,   8 ,      1.43727    
   2.06649    ,   2 ,      2.06649    
   5.54984    ,   5 ,      3.97367    
   8.93775    ,  10 ,      5.31886    
   3.97367    ,   3 ,      5.54984    
   9.01701    ,   7 ,      5.73978    
   5.73978    ,   9 ,      7.48543    
   1.43727    ,   1 ,      8.14589    
   7.48543    ,   4 ,      8.93775    
   5.31886    ,   6 ,      9.01701    
```

</div>
</details>

```fortran
END PROGRAM main
```
