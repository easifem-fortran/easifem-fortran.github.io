# Methods

Functional space made of Chebyshev polynomials of first kind. See [[ChebyshevFirst1D_]] and [[AbstractOrthopol1D_]].

## Structure

## ConstructorMethods

### ChebyshevFirstSpace

Usage example is given below.

```fortran
obj = ChebyshevFirstSpace(n=10)
```

## IOMethods

### Display

Usage example is given below.

```fortran
CALL obj%Display( msg="test message", unitno=stdout )
```

## GetMethods

### Eval

`Eval` evaluate all the basis in the space at a given point. The following function will return a vector `y`.

```fortran
y = obj%Eval( x=x ) !! here x is scalar, y is vector
```

We can also evaluate basis functions at several `x` if we supply a vector `x` to `Eval`.

```fortran
y = obj%Eval( x=x )
```

:::note
`y(:,i)` contains values of basis function at point x(i).
:::

### EvalGradient

This function evaluate each basis function at a given point. If we pass a single value of `x`, then it returns a vector `y`. In this case `y(i)` denotes the value of gradient of ith basis function evaluated at point `x(i)`. The usage is given below.

```fortran
y = obj%EvalGradient( x=x )
```

We can also evaluate gradient at several values by passing a vector of points `x`.

```fortran
y(:,:) = obj%EvalGradient( x=x(:) )
```

## SetMethods
