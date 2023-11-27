```fortran
program main
use easifemBase
implicit none

INTEGER( I4B ), parameter :: n = 5
REAL( DFP ) :: D(n+1), E(n+1), alphaCoeff(n+1), betaCoeff(n+1)
CALL JacobiJacobiRadauMatrix(-1.0_DFP, n, 0.0_DFP, 0.0_DFP, D, E, alphaCoeff, betaCoeff)
CALL Display(D, "D: ")
CALL Display(E, "E: ")
CALL Display(alphaCoeff, "alphaCoeff: ")
CALL Display(betaCoeff, "betaCoeff: ")
end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
   D:   
--------
 0.00000
 0.00000
 0.00000
 0.00000
 0.00000
-0.54545
  E:   
-------
0.57735
0.51640
0.50709
0.50395
0.50252
0.00000
alphaCoeff: 
------------
   0.00000  
   0.00000  
   0.00000  
   0.00000  
   0.00000  
  -0.00000  
betaCoeff: 
-----------
  2.00000  
  0.33333  
  0.26667  
  0.25714  
  0.25397  
  0.00000  
```

</div>
</details>
