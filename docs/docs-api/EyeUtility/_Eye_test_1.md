This example shows the use of Eye method.

```fortran
program main
use easifemBase
implicit none

CALL Display(MdEncode(eye(5, 1.0) ), "Eye (Real32) = " )
CALL Display(MdEncode(eye(5, 1 ) ), "Eye (Int32) = " ) 

end program main
```

## Results

Eye (Real32) =

|  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |
| 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 1 |

Eye (Int32) =

|  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |
| 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 0 | 1 |
