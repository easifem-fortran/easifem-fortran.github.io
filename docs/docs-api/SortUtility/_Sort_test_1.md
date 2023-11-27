```fortran
PROGRAM main
USE easifemBase
    real(real32) :: avec(10)
    call RANDOM_NUMBER(avec)
    avec = avec * 10
    call Display( avec, msg="r32 Before sorting = ", advance="NO", full=.TRUE. )
    call Display( Sort(avec, "QuickSort" ), msg="r32 After QuickSort = ", full=.TRUE. )
    call blanklines()
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
r32 Before sorting = ,  r32 After QuickSort = 
---------------------,  ----------------------
       0.81692       ,         0.73874        
       4.50177       ,         0.81692        
       9.91924       ,         0.96040        
       0.73874       ,         1.54308        
       5.62974       ,         3.11750        
       6.99052       ,         3.71431        
       1.54308       ,         4.50177        
       3.71431       ,         5.62974        
       3.11750       ,         6.99052        
       0.96040       ,         9.91924        
```

</div>
</details>

```fortran
    call RANDOM_NUMBER(avec)
    avec = avec * 10
    call Display( avec, msg="r32 Before sorting = ", advance="NO", full=.TRUE. )
    call Display( Sort(avec, "IntroSort" ), msg="r32 After IntroSort = ", full=.TRUE. )
    call blanklines()
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
r32 Before sorting = ,  r32 After IntroSort = 
---------------------,  ----------------------
       1.17791       ,         0.86935        
       4.67684       ,         1.17791        
       1.59849       ,         1.59849        
       5.28020       ,         2.80677        
       0.86935       ,         3.17075        
       4.97813       ,         4.67684        
       3.17075       ,         4.81857        
       2.80677       ,         4.97813        
       4.81857       ,         5.28020        
       8.01294       ,         8.01294         
```

</div>
</details>

```fortran
    call RANDOM_NUMBER(avec)
    avec = avec * 10
    call Display( avec, msg="r32 Before sorting = ", advance="NO", full=.TRUE. )
    call Display( Sort(avec, "HeapSort" ), msg="r32 After HeapSort = ", full=.TRUE. )
    call blanklines()
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
r32 Before sorting = ,  r32 After HeapSort = 
---------------------,  ---------------------
       5.03687       ,         0.69358       
       7.31376       ,         3.75097       
       0.69358       ,         4.85695       
       7.30829       ,         5.03687       
       5.33191       ,         5.33191       
       7.47603       ,         6.98299       
       7.08470       ,         7.08470       
       3.75097       ,         7.30829       
       4.85695       ,         7.31376       
       6.98299       ,         7.47603       
 
```

</div>
</details>

```fortran
    call RANDOM_NUMBER(avec)
    avec = avec * 10
    call Display( avec, msg="r32 Before sorting = ", advance="NO", full=.TRUE. )
    call Display(Sort(avec, "InsertionSort" ), msg="r32 After InsertionSort = ", full=.TRUE. )
    call blanklines()
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
r32 Before sorting = ,  r32 After InsertionSort = 
---------------------,  --------------------------
       7.27703       ,           0.85946          
       2.28287       ,           1.38315          
       5.26609       ,           2.28287          
       5.27420       ,           3.04672          
       1.38315       ,           5.04010          
       3.04672       ,           5.26609          
       5.04010       ,           5.27420          
       9.14432       ,           6.57562          
       0.85946       ,           7.27703          
       6.57562       ,           9.14432          
```

</div>
</details>

```fortran
END PROGRAM main
```
