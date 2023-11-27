This example shows the usage of `Nmhash32` and `Nmhash32x` method in [[Hashing32]] Module.

```fortran
  PROGRAM main
  use easifembase
  implicit none
  integer(int32) :: int32vec( 10 ), seed
  character( len = 512 ) :: achar
  integer(i4b) :: ahash
  int32vec = arange(1_int32,10_int32,1_int32)
  call display( int32vec, "int32vec=", orient="ROW" )
  seed = 100
  call new_nmhash32_seed( seed )
  ahash = Nmhash32(int32vec, seed)
  call display( ahash, "ahash, nmhash32=")
  ahash = Nmhash32x(int32vec, seed)
  call display( ahash, "ahash nmhash32x=")
  achar = "hello world"
  ahash = Nmhash32( trim(achar) )
  call display( ahash, "ahash=")
  ahash = Nmhash32x( trim(achar) )
  call display( ahash, "ahash fnv_1a=")
  achar = "HELLO WORLD"
  ahash = Nmhash32( trim(achar) )
  call display( ahash, "ahash=")
  ahash = Nmhash32x( trim(achar) )
  call display( ahash, "ahash fnv_1a=")
END PROGRAM main
```
