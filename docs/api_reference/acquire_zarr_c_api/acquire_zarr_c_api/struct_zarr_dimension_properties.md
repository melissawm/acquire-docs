

# Struct ZarrDimensionProperties



[**ClassList**](annotated.md) **>** [**ZarrDimensionProperties**](struct_zarr_dimension_properties.md)



_Properties of a dimension of the Zarr array._ 

* `#include <zarr.types.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  uint32\_t | [**array\_size\_px**](#variable-array_size_px)  <br> |
|  uint32\_t | [**chunk\_size\_px**](#variable-chunk_size_px)  <br> |
|  const char \* | [**name**](#variable-name)  <br> |
|  uint32\_t | [**shard\_size\_chunks**](#variable-shard_size_chunks)  <br> |
|  ZarrDimensionType | [**type**](#variable-type)  <br> |












































## Public Attributes Documentation




### variable array\_size\_px 

```C++
uint32_t ZarrDimensionProperties::array_size_px;
```



Size of the array along this dimension in pixels 


        

<hr>



### variable chunk\_size\_px 

```C++
uint32_t ZarrDimensionProperties::chunk_size_px;
```



Size of the chunks along this dimension in pixels 


        

<hr>



### variable name 

```C++
const char* ZarrDimensionProperties::name;
```



Name of the dimension 


        

<hr>



### variable shard\_size\_chunks 

```C++
uint32_t ZarrDimensionProperties::shard_size_chunks;
```



Number of chunks in a shard along this dimension 


        

<hr>



### variable type 

```C++
ZarrDimensionType ZarrDimensionProperties::type;
```



Type of the dimension 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `/Users/mwebermendonca/acquire-zarr/include/zarr.types.h`

