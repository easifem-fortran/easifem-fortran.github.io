```fortran
PROGRAM main
USE easifemBase
	REAL( DFP ), ALLOCATABLE :: mat(:,:), w(:), exact(:)
	REAL( DFP ), PARAMETER :: tol= 1.0E-2
	
	mat =RESHAPE( &
		[   1.96, -6.49, -0.47, -7.20, -0.65, &
			& -6.49, 3.80, -6.39, 1.50, -6.34, &
			& -0.47,-6.39, 4.17, -1.51, 2.67, &
			& -7.20, 1.50,-1.51, 5.70, 1.80, &
			& -0.65,-6.34, 2.67, 1.80,-7.10 &
		], [5,5])
	!!
	w = SymEigenValues(mat)
	!!
	exact = [-11.07, -6.23, 0.86, 8.87, 16.09]
	!!
	CALL OK( ALL(SOFTEQ(w, exact, tol)), "")
END PROGRAM main
```
