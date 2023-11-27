This example shows how to use `MdEncode`.

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
type(String) :: astr
integer( i4b ), allocatable :: ivec( : ), i2vec(:,:)

  ivec = [1,2,3,4,5,6,7,8,9,10]
  astr = MdEncode( ivec )
  write( *, "(A)" ) astr%chars()
```

<details>
<summary>See results:</summary>
<div>


|  |  |  |  |  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |

</div>
</details>




```fortran
  i2vec = reshape(  [1,2,3,4,5,6,7,8,9,10], [2,5] )
  astr = MdEncode( i2vec )
  CALL Display( astr, "astr" // CHAR_LF )
  write( *, "(A)" ) astr%chars()
```


<details>
<summary>See results</summary>
<div>

|  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |
| 1 | 3 | 5 | 7 | 9 |
| 2 | 4 | 6 | 8 | 10 |


</div>
</details>

```fortran
END PROGRAM main
```
