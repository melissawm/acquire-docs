

# File zarr.types.h

[**File List**](files.md) **>** [**acquire-zarr**](dir_333e6df7611621adb9e912e152b800c4.md) **>** [**include**](dir_ccebfe39b92f73ccebee9a2fb203dc1b.md) **>** [**zarr.types.h**](zarr_8types_8h.md)

[Go to the documentation of this file](zarr_8types_8h.md)


```C++
#ifndef H_ACQUIRE_ZARR_TYPES_V0
#define H_ACQUIRE_ZARR_TYPES_V0

#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>

#ifdef __cplusplus
extern "C"
{
#endif

    typedef enum
    {
        ZarrStatusCode_Success = 0,
        ZarrStatusCode_InvalidArgument,
        ZarrStatusCode_Overflow,
        ZarrStatusCode_InvalidIndex,
        ZarrStatusCode_NotYetImplemented,
        ZarrStatusCode_InternalError,
        ZarrStatusCode_OutOfMemory,
        ZarrStatusCode_IOError,
        ZarrStatusCode_CompressionError,
        ZarrStatusCode_InvalidSettings,
        ZarrStatusCodeCount,
    } ZarrStatusCode;

    typedef enum
    {
        ZarrVersion_2 = 2,
        ZarrVersion_3,
        ZarrVersionCount
    } ZarrVersion;

    typedef enum
    {
        ZarrLogLevel_Debug = 0,
        ZarrLogLevel_Info,
        ZarrLogLevel_Warning,
        ZarrLogLevel_Error,
        ZarrLogLevel_None,
        ZarrLogLevelCount
    } ZarrLogLevel;

    typedef enum
    {
        ZarrDataType_uint8 = 0,
        ZarrDataType_uint16,
        ZarrDataType_uint32,
        ZarrDataType_uint64,
        ZarrDataType_int8,
        ZarrDataType_int16,
        ZarrDataType_int32,
        ZarrDataType_int64,
        ZarrDataType_float32,
        ZarrDataType_float64,
        ZarrDataTypeCount
    } ZarrDataType;

    typedef enum
    {
        ZarrCompressor_None = 0,
        ZarrCompressor_Blosc1,
        ZarrCompressorCount
    } ZarrCompressor;

    typedef enum
    {
        ZarrCompressionCodec_None = 0,
        ZarrCompressionCodec_BloscLZ4,
        ZarrCompressionCodec_BloscZstd,
        ZarrCompressionCodecCount
    } ZarrCompressionCodec;

    typedef enum
    {
        ZarrDimensionType_Space = 0,
        ZarrDimensionType_Channel,
        ZarrDimensionType_Time,
        ZarrDimensionType_Other,
        ZarrDimensionTypeCount
    } ZarrDimensionType;

    typedef struct
    {
        const char* endpoint;
        const char* bucket_name;
        const char* access_key_id;
        const char* secret_access_key;
    } ZarrS3Settings;

    typedef struct
    {
        ZarrCompressor compressor;  
        ZarrCompressionCodec codec; 
        uint8_t level;              
        uint8_t shuffle; 
    } ZarrCompressionSettings;

    typedef struct
    {
        const char* name; 
        ZarrDimensionType type; 
        uint32_t array_size_px; 
        uint32_t chunk_size_px; 
        uint32_t shard_size_chunks; 
    } ZarrDimensionProperties;

#ifdef __cplusplus
}
#endif

#endif // H_ACQUIRE_ZARR_TYPES_V0
```


