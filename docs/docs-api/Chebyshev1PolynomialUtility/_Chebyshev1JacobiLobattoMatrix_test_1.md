```fortran
program main
use easifemBase
implicit none
INTEGER( I4B ), parameter :: n = 5
REAL( DFP ) :: D(n+2), E(n+2), alphaCoeff(n+2), betaCoeff(n+2)
CALL Chebyshev1JacobiLobattoMatrix(n,  D, E, alphaCoeff, betaCoeff)
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
-------
0.00000
0.00000
0.00000
0.00000
0.00000
0.00000
0.00000
  E:   
-------
0.70711
0.50000
0.50000
0.50000
0.50000
0.70711
0.00000
alphaCoeff: 
------------
  0.00000   
  0.00000   
  0.00000   
  0.00000   
  0.00000   
  0.00000   
  0.00000   
betaCoeff: 
-----------
  3.14159  
  0.50000  
  0.25000  
  0.25000  
  0.25000  
  0.25000  
  0.00000  

```

</div>
</details>
