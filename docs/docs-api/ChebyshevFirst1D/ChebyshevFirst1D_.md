# Methods

Chebyshev polynomial of first kind is defined. The nth order Chebyshev polynomial is denoted by $T_{n}(x)$. Chebyshev polynomials are orthogonal polynomials.

It is a child of [[AbstractOrthopol1D_]].

## Structure

```fortran
TYPE, EXTENDS( AbstractOrthoPol1D_ ) :: ChebyshevFirst1D_
  CONTAINS
```

## ConstructorMethods

### Constructor function

We can create an instance of $T_{n}$ by calling `ChebyshevFirst1D()` function. Examples are included in

- [[ChebyshevFirst1D_test_1]]
- [[ChebyshevFirst1D_test_2]]

Interface is given below:

```fortran
MODULE FUNCTION ChebyshevFirst1D( varname, n, isMonic, &
    & isOrthonormal ) RESULT( ans )
  CHARACTER( LEN = * ), INTENT( IN ) :: varname
    !! variable name
  INTEGER( I4B ), INTENT( IN ) :: n
    !! order of chebyshev polynomial
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isMonic
    !! Default is .FALSE., if true then leading coeff of poly is 1
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isOrthonormal
    !! Default is .FALSE., if true then the polynomials are orthonormal
  TYPE( ChebyshevFirst1D_ ) :: ans
    !! Chebyshev polynomial of first kind
END FUNCTION ChebyshevFirst1D
```

### ChebyshevFirst1D_Pointer

We can create an instance of new pointer by `ChebyshevFirst1D_Pointer()` function.

The interface is given below:

```fortran
FUNCTION ChebyshevFirst1D_Pointer( varname, n, &
  & isMonic, isOrthonormal ) RESULT( ans )
  CHARACTER( LEN = * ), INTENT( IN ) :: varname
    !! variable name
  INTEGER( I4B ), INTENT( IN ) :: n
    !! order of chebyshev polynomial
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isMonic
    !! Default is .FALSE., if true then leading coeff of poly is 1
  LOGICAL( LGT ), OPTIONAL, INTENT( IN ) :: isOrthonormal
    !! Default is .FALSE., if true then the polynomials are orthonormal
  CLASS( ChebyshevFirst1D_ ), POINTER :: ans
    !! Chebyshev polynomial of first kind
END FUNCTION ChebyshevFirst1D_Pointer
```

### Deallocate

You can deallocate (or destroy) the object by calling `Deallocate()` subroutine.

```fortran
CALL obj%Deallocate()
```

## GetMethods

### GetStringForUID

### Weight

This function evaluate the weight of the Chebyshev polynomial at a given point x.

### GetRecurrenceCoeff

### GetCoeffScale

### Zeros

### GaussQuadrature

### GaussRadauQuadratur

### GaussLobattoQuadrature

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Link from '@docusaurus/Link';

<div className='container margin-vert--lg'>
<div className='row row--no-gutters'>

<Tabs defaultValue={null}>

<TabItem value="1" label="🌻 Example 1">

[ChebyshevFirst1D_test_1](ChebyshevFirst1D_test_1.md)

import PartialExample1 from './ChebyshevFirst1D_test_1.md';

<PartialExample1 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="2" label="🌻 Example 2">

[ChebyshevFirst1D_test_2](ChebyshevFirst1D_test_2.md)

import PartialExample2 from './ChebyshevFirst1D_test_2.md';

<PartialExample2 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="3" label="🌻 Example 3">

[ChebyshevFirst1D_test_3](ChebyshevFirst1D_test_3.md)

import PartialExample3 from './ChebyshevFirst1D_test_3.md';

<PartialExample3 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="4" label="🌻 Example 4">

[ChebyshevFirst1D_test_4](ChebyshevFirst1D_test_4.md)

import PartialExample4 from './ChebyshevFirst1D_test_4.md';

<PartialExample4 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="5" label="🌻 Example 5">

[ChebyshevFirst1D_test_5](ChebyshevFirst1D_test_5.md)

import PartialExample5 from './ChebyshevFirst1D_test_5.md';

<PartialExample5 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="6" label="🔥 Clear">

</TabItem>

</Tabs>

<Tabs defaultValue={null}>

<TabItem value="6" label="🌻 Example 6">

[ChebyshevFirst1D_test_6](ChebyshevFirst1D_test_6.md)

import PartialExample6 from './ChebyshevFirst1D_test_6.md';

<PartialExample6 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="7" label="🌻 Example 7">

[ChebyshevFirst1D_test_7](ChebyshevFirst1D_test_7.md)

import PartialExample7 from './ChebyshevFirst1D_test_7.md';

<PartialExample7 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="8" label="🌻 Example 8">

[ChebyshevFirst1D_test_8](ChebyshevFirst1D_test_8.md)

import PartialExample8 from './ChebyshevFirst1D_test_8.md';

<PartialExample8 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="9" label="🌻 Example 9">

[ChebyshevFirst1D_test_9](ChebyshevFirst1D_test_9.md)

import PartialExample9 from './ChebyshevFirst1D_test_9.md';

<PartialExample9 />

<div className="col col--5">
  <Link to="#examples" className="button button--lg button--outline button--block button--primary">Checkout more examples</Link>
</div>

</TabItem>

<TabItem value="10" label="🔥 Clear">

</TabItem>

</Tabs>

</div>
</div>
