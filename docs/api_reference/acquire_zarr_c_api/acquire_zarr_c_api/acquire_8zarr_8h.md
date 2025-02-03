

# File acquire.zarr.h



[**FileList**](files.md) **>** [**acquire-zarr**](dir_333e6df7611621adb9e912e152b800c4.md) **>** [**include**](dir_ccebfe39b92f73ccebee9a2fb203dc1b.md) **>** [**acquire.zarr.h**](acquire_8zarr_8h.md)

[Go to the source code of this file](acquire_8zarr_8h_source.md)



* `#include "zarr.types.h"`















## Classes

| Type | Name |
| ---: | :--- |
| struct | [**ZarrStreamSettings**](struct_zarr_stream_settings.md) <br>_The settings for a Zarr stream._  |


## Public Types

| Type | Name |
| ---: | :--- |
| typedef struct ZarrStream\_s | [**ZarrStream**](#typedef-zarrstream)  <br> |




















## Public Functions

| Type | Name |
| ---: | :--- |
|  ZarrStatusCode | [**ZarrStreamSettings\_create\_dimension\_array**](#function-zarrstreamsettings_create_dimension_array) ([**ZarrStreamSettings**](struct_zarr_stream_settings.md) \* settings, size\_t dimension\_count) <br>_Allocate memory for the dimension array in the Zarr stream settings struct._  |
|  void | [**ZarrStreamSettings\_destroy\_dimension\_array**](#function-zarrstreamsettings_destroy_dimension_array) ([**ZarrStreamSettings**](struct_zarr_stream_settings.md) \* settings) <br>_Free memory for the dimension array in the Zarr stream settings struct._  |
|  ZarrStatusCode | [**ZarrStream\_append**](#function-zarrstream_append) (ZarrStream \* stream, const void \* data, size\_t bytes\_in, size\_t \* bytes\_out) <br>_Append data to the Zarr stream._  |
|  ZarrStream \* | [**ZarrStream\_create**](#function-zarrstream_create) ([**ZarrStreamSettings**](struct_zarr_stream_settings.md) \* settings) <br>_Create a Zarr stream._  |
|  void | [**ZarrStream\_destroy**](#function-zarrstream_destroy) (ZarrStream \* stream) <br>_Destroy a Zarr stream._  |
|  const char \* | [**Zarr\_get\_api\_version**](#function-zarr_get_api_version) () <br>_Get the version of the Zarr API._  |
|  ZarrLogLevel | [**Zarr\_get\_log\_level**](#function-zarr_get_log_level) () <br>_Get the log level for the Zarr API._  |
|  const char \* | [**Zarr\_get\_status\_message**](#function-zarr_get_status_message) (ZarrStatusCode code) <br>_Get the message for the given status code._  |
|  ZarrStatusCode | [**Zarr\_set\_log\_level**](#function-zarr_set_log_level) (ZarrLogLevel level) <br>_Set the log level for the Zarr API._  |




























## Public Types Documentation




### typedef ZarrStream 

```C++
typedef struct ZarrStream_s ZarrStream;
```




<hr>
## Public Functions Documentation




### function ZarrStreamSettings\_create\_dimension\_array 

_Allocate memory for the dimension array in the Zarr stream settings struct._ 
```C++
ZarrStatusCode ZarrStreamSettings_create_dimension_array (
    ZarrStreamSettings * settings,
    size_t dimension_count
) 
```





**Parameters:**


* `settings` The Zarr stream settings struct. 
* `dimension_count` The number of dimensions in the dataset to allocate memory for. 



**Returns:**

ZarrStatusCode\_Success on success, or an error code on failure. 





        

<hr>



### function ZarrStreamSettings\_destroy\_dimension\_array 

_Free memory for the dimension array in the Zarr stream settings struct._ 
```C++
void ZarrStreamSettings_destroy_dimension_array (
    ZarrStreamSettings * settings
) 
```





**Parameters:**


* `settings` The Zarr stream settings struct containing the dimension array to free. 




        

<hr>



### function ZarrStream\_append 

_Append data to the Zarr stream._ 
```C++
ZarrStatusCode ZarrStream_append (
    ZarrStream * stream,
    const void * data,
    size_t bytes_in,
    size_t * bytes_out
) 
```



This function will block while chunks are compressed and written to the store. It will return when all data has been written. Multiple frames can be appended in a single call. 

**Parameters:**


* `stream` The Zarr stream struct. 
* `data` The data to append. 
* `bytes_in` The number of bytes in `data`. This can be any nonnegative integer. On a value of 0, this function will immediately return. 
* `bytes_out` The number of bytes written to the stream. 



**Returns:**

ZarrStatusCode\_Success on success, or an error code on failure. 





        

<hr>



### function ZarrStream\_create 

_Create a Zarr stream._ 
```C++
ZarrStream * ZarrStream_create (
    ZarrStreamSettings * settings
) 
```





**Parameters:**


* `settings` The settings for the Zarr stream. 



**Returns:**

A pointer to the Zarr stream struct, or NULL on failure. 





        

<hr>



### function ZarrStream\_destroy 

_Destroy a Zarr stream._ 
```C++
void ZarrStream_destroy (
    ZarrStream * stream
) 
```



This function waits for all pending writes to complete and frees the memory allocated for the Zarr stream. 

**Parameters:**


* `stream` The Zarr stream struct to destroy. 




        

<hr>



### function Zarr\_get\_api\_version 

_Get the version of the Zarr API._ 
```C++
const char * Zarr_get_api_version () 
```





**Returns:**

Semver formatted version of the Zarr API. 





        

<hr>



### function Zarr\_get\_log\_level 

_Get the log level for the Zarr API._ 
```C++
ZarrLogLevel Zarr_get_log_level () 
```





**Returns:**

The log level for the Zarr API. 





        

<hr>



### function Zarr\_get\_status\_message 

_Get the message for the given status code._ 
```C++
const char * Zarr_get_status_message (
    ZarrStatusCode code
) 
```





**Parameters:**


* `code` The status code. 



**Returns:**

A human-readable status message. 





        

<hr>



### function Zarr\_set\_log\_level 

_Set the log level for the Zarr API._ 
```C++
ZarrStatusCode Zarr_set_log_level (
    ZarrLogLevel level
) 
```





**Parameters:**


* `level` The log level. 



**Returns:**

ZarrStatusCode\_Success on success, or an error code on failure. 





        

<hr>

------------------------------
The documentation for this class was generated from the following file `/Users/mwebermendonca/acquire-zarr/include/acquire.zarr.h`

