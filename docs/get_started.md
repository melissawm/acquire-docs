# Get Started

## Installation the Python library

To install the `acquire-zarr` Python library on Windows, macOS, or Ubuntu, run the following command:

```bash
python -m pip install acquire-zarr
```

## Usage

The library provides two main interfaces. First, `ZarrStream`, representing an output stream to a Zarr dataset.
Second, `ZarrStreamSettings` to configure a Zarr stream.

A typical use case for a 4-dimensional acquisition might look like this:

```c
ZarrStreamSettings settings = (ZarrStreamSettings){
    .store_path = "my_stream.zarr",
    .data_type = ZarrDataType_uint16,
    .version = ZarrVersion_3,
};
settings.store_path = "my_stream.zarr";
settings.data_type = ZarrDataType_uint16;
settings.version = ZarrVersion_3;

ZarrStreamSettings_create_dimension_array(&settings, 4);
settings.dimensions[0] = (ZarrDimensionProperties){
    .name = "t",
    .type = ZarrDimensionType_Time,
    .array_size_px = 0,      // this is the append dimension
    .chunk_size_px = 100,    // 100 time points per chunk
    .shard_size_chunks = 10, // 10 chunks per shard
};

settings.dimensions[1] = (ZarrDimensionProperties){
    .name = "c",
    .type = ZarrDimensionType_Channel,
    .array_size_px = 3,     // 3 channels
    .chunk_size_px = 1,     // 1 channel per chunk
    .shard_size_chunks = 1, // 1 chunk per shard
};

settings.dimensions[2] = (ZarrDimensionProperties){
    .name = "y",
    .type = ZarrDimensionType_Space,
    .array_size_px = 1080,  // height
    .chunk_size_px = 270,   // 4 x 4 tiles of size 270 x 480
    .shard_size_chunks = 2, // 2 x 2 tiles per shard
};

settings.dimensions[3] = (ZarrDimensionProperties){
    .name = "x",
    .type = ZarrDimensionType_Space,
    .array_size_px = 1920,  // width
    .chunk_size_px = 480,   // 4 x 4 tiles of size 270 x 480
    .shard_size_chunks = 2, // 2 x 2 tiles per shard
};

ZarrStream* stream = ZarrStream_create(&settings);

size_t bytes_written;
ZarrStream_append(stream, my_frame_data, my_frame_size, &bytes_written);
assert(bytes_written == my_frame_size);
```

Look at [acquire.zarr.h](include/acquire.zarr.h) for more details.

This acquisition in Python would look like this:

```python
import acquire_zarr as aqz
import numpy as np

settings = aqz.StreamSettings(
    store_path="my_stream.zarr",
    data_type=aqz.DataType.UINT16,
    version=aqz.ZarrVersion.V3
)

settings.dimensions.extend([
    aqz.Dimension(
        name="t",
        type=aqz.DimensionType.TIME,
        array_size_px=0,
        chunk_size_px=100,
        shard_size_chunks=10
    ),
    aqz.Dimension(
        name="c",
        type=aqz.DimensionType.CHANNEL,
        array_size_px=3,
        chunk_size_px=1,
        shard_size_chunks=1
    ),
    aqz.Dimension(
        name="y",
        type=aqz.DimensionType.SPACE,
        array_size_px=1080,
        chunk_size_px=270,
        shard_size_chunks=2
    ),
    aqz.Dimension(
        name="x",
        type=aqz.DimensionType.SPACE,
        array_size_px=1920,
        chunk_size_px=480,
        shard_size_chunks=2
    )
])

# Generate some random data: one time point, all channels, full frame
my_frame_data = np.random.randint(0, 2**16, (3, 1080, 1920), dtype=np.uint16)

stream = aqz.ZarrStream(settings)
stream.append(my_frame_data)
```

## Building from source

### Build Python bindings from source

To build the Python bindings from source, follow [these instructions](https://github.com/acquire-project/acquire-zarr/blob/main/README.md).

### Build the C interface

To build the acquire-zarr C library, follow the steps below:

1. Download the static library from the [Releases page](https://github.com/acquire-project/acquire-zarr/releases)
2. Install required dependencies:
    - `c-blosc` v1.21.5
    - `nlohmann-json` v3.11.3
    - `minio-cpp` v0.3.0
3. Create a CMakeLists file in your project directory (see [this example](https://github.com/acquire-project/acquire-zarr/blob/main/examples/CMakeLists.txt))
