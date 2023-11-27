This example shows the usage of `Fnv_1_hash` and `Fnv_1a_hash` method in [[Hashing32]] Module.

```fortran
PROGRAM main
  use easifembase
  implicit none
  integer(int32) :: int32vec( 10 )
  character( len = 512 ) :: achar
  integer(i4b) :: ahash
  int32vec = arange(1_int32,10_int32,1_int32)
  call display( int32vec, "int32vec=", orient="ROW" )
  ahash = FNV_1_HASH(int32vec)
  call display( ahash, "ahash=")
  ahash = FNV_1a_HASH(int32vec)
  call display( ahash, "ahash fnv_1a=")
  achar = "hello world"
  ahash = FNV_1_HASH( trim(achar) )
  call display( ahash, "ahash=")
  ahash = FNV_1a_HASH( trim(achar) )
  call display( ahash, "ahash fnv_1a=")
  achar = "HELLO WORLD"
  ahash = FNV_1_HASH( trim(achar) )
  call display( ahash, "ahash=")
  ahash = FNV_1a_HASH( trim(achar) )
  call display( ahash, "ahash fnv_1a=")
END PROGRAM main
```
