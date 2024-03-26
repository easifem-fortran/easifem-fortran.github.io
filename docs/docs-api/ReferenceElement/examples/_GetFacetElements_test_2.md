This example tests the `FacetElements` method.

```fortran
PROGRAM main
  USE easifemBase


  block
    TYPE( ReferenceElement_ ) :: facetElems(3)
    INTEGER( I4B ) :: ii

    CALL GetFacetElements(elemType=Triangle3, nsd=2, ans=facetElems)

    DO ii = 1, SIZE( facetElems )
      CALL Display( facetElems( ii ),  &
        & "facetElements( " // tostring(ii) // " ) = " )
      CALL Blanklines( NOL = 2 )
    END DO

  end block
END PROGRAM main
```
