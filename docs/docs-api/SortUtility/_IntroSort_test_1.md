```fortran
PROGRAM main
USE easifemBase
    real(real32) :: avec(10)
    call RANDOM_NUMBER(avec)
    avec = avec * 10
    call Display( avec, msg="r32 Before sorting = ", advance="NO", full=.TRUE. )
    call Introsort(avec )
    call Display( avec, msg="r32 After sorting = ", full=.TRUE. )
    call blanklines()
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
r32 Before sorting = ,  r32 After sorting = 
---------------------,  --------------------
       6.97349       ,        0.03184       
       0.03184       ,        3.72048       
       8.74764       ,        4.85491       
       7.11966       ,        5.73196       
       3.72048       ,        6.97349       
       8.64364       ,        7.11966       
       7.54315       ,        7.54315       
       8.98520       ,        8.64364       
       4.85491       ,        8.74764       
       5.73196       ,        8.98520       
```

</div>
</details>

```fortran
END PROGRAM main
```
