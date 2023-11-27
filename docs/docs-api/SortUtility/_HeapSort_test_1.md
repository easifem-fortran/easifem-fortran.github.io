```fortran
PROGRAM main
USE easifemBase
    real(real32) :: avec(10)
    call RANDOM_NUMBER(avec)
    avec = avec * 10
    call Display( avec, msg="r32 Before sorting = ", advance="NO" )
    call HeapSort(avec )
    call Display( avec, msg="r32 After sorting = " )
    call blanklines()
```

<details>
<summary>See results</summary>
<div>

|r32 Before sorting  |  r32 After sorting |
|---------------------|  --------------------|
|       8.13609       |        0.72018|
|       9.81305       |        1.10549|
|       5.17501       |        2.40877|
|       0.72018       |        3.13865|
|       6.35550       |        4.40301|
|       3.13865       |        5.17501|
|       9.25757       |        6.35550|
|       1.10549       |        8.13609|
|       2.40877       |        9.25757|
|       4.40301       |        9.81305|

</div>
</details>

```fortran
END PROGRAM main
```
