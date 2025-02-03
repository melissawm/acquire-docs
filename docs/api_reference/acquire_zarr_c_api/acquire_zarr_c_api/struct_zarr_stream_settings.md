

# Struct ZarrStreamSettings



[**ClassList**](annotated.md) **>** [**ZarrStreamSettings**](struct_zarr_stream_settings.md)



_The settings for a Zarr stream._ [More...](#detailed-description)

* `#include <acquire.zarr.h>`





















## Public Attributes

| Type | Name |
| ---: | :--- |
|  [**ZarrCompressionSettings**](struct_zarr_compression_settings.md) \* | [**compression\_settings**](#variable-compression_settings)  <br> |
|  const char \* | [**custom\_metadata**](#variable-custom_metadata)  <br> |
|  ZarrDataType | [**data\_type**](#variable-data_type)  <br> |
|  size\_t | [**dimension\_count**](#variable-dimension_count)  <br> |
|  [**ZarrDimensionProperties**](struct_zarr_dimension_properties.md) \* | [**dimensions**](#variable-dimensions)  <br> |
|  unsigned int | [**max\_threads**](#variable-max_threads)  <br> |
|  bool | [**multiscale**](#variable-multiscale)  <br> |
|  [**ZarrS3Settings**](struct_zarr_s3_settings.md) \* | [**s3\_settings**](#variable-s3_settings)  <br> |
|  const char \* | [**store\_path**](#variable-store_path)  <br> |
|  ZarrVersion | [**version**](#variable-version)  <br> |












































## Detailed Description


This struct contains the settings for a Zarr stream, including the store path, custom metadata, S3 settings, chunk compression settings, dimension properties, whether to stream to multiple levels of detail, the pixel data type, and the Zarr format version. 

**Note:**

The store path can be a filesystem path or an S3 key prefix. For example, supplying an endpoint "s3://my-endpoint.com" and a bucket "my-bucket" with a store\_path of "my-dataset.zarr" will result in the store being written to "s3://my-endpoint.com/my-bucket/my-dataset.zarr". 




**Note:**

The dimensions array may be allocated with ZarrStreamSettings\_create\_dimension\_array and freed with ZarrStreamSettings\_destroy\_dimension\_array. The order in which you set the dimension properties in the array should match the order of the dimensions from slowest to fastest changing, for example, [Z, Y, X] for a 3D dataset. 





    
## Public Attributes Documentation




### variable compression\_settings 

```C++
ZarrCompressionSettings* ZarrStreamSettings::compression_settings;
```



Optional chunk compression settings for the store. 


        

<hr>



### variable custom\_metadata 

```C++
const char* ZarrStreamSettings::custom_metadata;
```



JSON-formatted custom metadata to be stored with the dataset. 


        

<hr>



### variable data\_type 

```C++
ZarrDataType ZarrStreamSettings::data_type;
```



The pixel data type of the dataset. 


        

<hr>



### variable dimension\_count 

```C++
size_t ZarrStreamSettings::dimension_count;
```



The number of dimensions in the dataset. 


        

<hr>



### variable dimensions 

```C++
ZarrDimensionProperties* ZarrStreamSettings::dimensions;
```



The properties of each dimension in the dataset. 


        

<hr>



### variable max\_threads 

```C++
unsigned int ZarrStreamSettings::max_threads;
```



The maximum number of threads to use in the stream. Set to 0 to use the supported number of concurrent threads. 


        

<hr>



### variable multiscale 

```C++
bool ZarrStreamSettings::multiscale;
```



Whether to stream to multiple levels of detail. 


        

<hr>



### variable s3\_settings 

```C++
ZarrS3Settings* ZarrStreamSettings::s3_settings;
```



Optional S3 settings for the store. 


        

<hr>



### variable store\_path 

```C++
const char* ZarrStreamSettings::store_path;
```



Path to the store. Filesystem path or S3 key prefix. 


        

<hr>



### variable version 

```C++
ZarrVersion ZarrStreamSettings::version;
```



The version of the Zarr format to use. 2 or 3. 


        

<hr>

------------------------------
The documentation for this class was generated from the following file `/Users/mwebermendonca/acquire-zarr/include/acquire.zarr.h`

