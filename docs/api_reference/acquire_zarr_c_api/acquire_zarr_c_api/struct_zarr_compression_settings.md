

# Struct ZarrCompressionSettings



[**ClassList**](annotated.md) **>** [**ZarrCompressionSettings**](struct_zarr_compression_settings.md)



_Compression settings for a Zarr array. @detail The compressor is not the same as the codec. A codec is a specific implementation of a compression algorithm, while a compressor is a library that implements one or more codecs._ 

* `#include <zarr.types.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  ZarrCompressionCodec | [**codec**](#variable-codec)  <br> |
|  ZarrCompressor | [**compressor**](#variable-compressor)  <br> |
|  uint8\_t | [**level**](#variable-level)  <br> |
|  uint8\_t | [**shuffle**](#variable-shuffle)  <br> |












































## Public Attributes Documentation




### variable codec 

```C++
ZarrCompressionCodec ZarrCompressionSettings::codec;
```



Codec to use 


        

<hr>



### variable compressor 

```C++
ZarrCompressor ZarrCompressionSettings::compressor;
```



Compressor to use 


        

<hr>



### variable level 

```C++
uint8_t ZarrCompressionSettings::level;
```



Compression level 


        

<hr>



### variable shuffle 

```C++
uint8_t ZarrCompressionSettings::shuffle;
```



Whether to shuffle the data before compressing 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `/Users/mwebermendonca/acquire-zarr/include/zarr.types.h`

