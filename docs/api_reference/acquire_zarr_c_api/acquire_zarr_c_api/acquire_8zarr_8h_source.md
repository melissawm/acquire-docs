

# File acquire.zarr.h

[**File List**](files.md) **>** [**acquire-zarr**](dir_333e6df7611621adb9e912e152b800c4.md) **>** [**include**](dir_ccebfe39b92f73ccebee9a2fb203dc1b.md) **>** [**acquire.zarr.h**](acquire_8zarr_8h.md)

[Go to the documentation of this file](acquire_8zarr_8h.md)


```C++
#pragma once

#include "zarr.types.h"

#ifdef __cplusplus
extern "C"
{
#endif

    typedef struct ZarrStreamSettings_s
    {
        const char* store_path; 
        const char* custom_metadata; 
        ZarrS3Settings* s3_settings; 
        ZarrCompressionSettings* compression_settings; 
        ZarrDimensionProperties* dimensions; 
        size_t dimension_count; 
        bool multiscale; 
        ZarrDataType data_type; 
        ZarrVersion version; 
        unsigned int max_threads; 
    } ZarrStreamSettings;

    typedef struct ZarrStream_s ZarrStream;

    const char* Zarr_get_api_version();

    ZarrStatusCode Zarr_set_log_level(ZarrLogLevel level);

    ZarrLogLevel Zarr_get_log_level();

    const char* Zarr_get_status_message(ZarrStatusCode code);

    ZarrStatusCode ZarrStreamSettings_create_dimension_array(ZarrStreamSettings* settings, size_t dimension_count);

    void ZarrStreamSettings_destroy_dimension_array(ZarrStreamSettings* settings);

    ZarrStream* ZarrStream_create(ZarrStreamSettings* settings);

    void ZarrStream_destroy(ZarrStream* stream);

    ZarrStatusCode ZarrStream_append(ZarrStream* stream,
                                     const void* data,
                                     size_t bytes_in,
                                     size_t* bytes_out);

#ifdef __cplusplus
}
#endif
```


