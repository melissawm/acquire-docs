# Writing Multiscale Zarr Files

This tutorial will provide an example of writing multiscale data to a Zarr file.

Zarr has additional capabilities relative to Acquire's basic storage devices, namely _chunking_, _compression_, and _multiscale storage_. To enable _chunking_ and _multiscale storage_, set those attributes in instances of the `ChunkingProperties` and `StorageProperties` classes, respectively. You can learn more about the Zarr capabilities in `Acquire` [here](https://github.com/acquire-project/acquire-driver-zarr).

## Configure `Runtime`
To start, we'll create a `Runtime` object and configure the streaming process, selecting `Zarr` as the storage device to enable multiscale data.

```python
import acquire

# Initialize a Runtime object
runtime = acquire.Runtime()

# Initialize the device manager
dm = runtime.device_manager()

# Grab the current configuration
config = runtime.get_configuration() 

# Select the radial sine simulated camera as the video source
config.video[0].camera.identifier = dm.select(acquire.DeviceKind.Camera, "simulated: radial sin") 

# Set the storage to Zarr to have the option to save multiscale data
config.video[0].storage.identifier = dm.select(acquire.DeviceKind.Storage, "Zarr")

# Set the time for collecting data for a each frame
config.video[0].camera.settings.exposure_time_us = 1e4  # 10 ms

# size of image region of interest on the camera (x, y)
config.video[0].camera.settings.shape = (1920, 1080)

# Set the max frame count
config.video[0].max_frame_count = 5 # collect 5 frames

# specify the pixel datatype as a uint8
config.video[0].camera.settings.pixel_type = acquire.SampleType.U8

# set the scale of the pixels
config.video[0].storage.settings.pixel_scale_um = (1, 1) # 1 micron by 1 micron

# Set the output file to out.zarr
config.video[0].storage.settings.filename = "out.zarr"
```

Below we'll configure the multiscale specific settings.

```python
# Chunk size may need to be optimized for each acquisition. 
# See Zarr documentation for further guiddance: https://zarr.readthedocs.io/en/stable/tutorial.html#chunk-optimizations
config.video[0].storage.settings.chunking.max_bytes_per_chunk = 16 * 2**20 # 16 MB

# x, y dimensions of each chunk to 1/3 of the width and height of the image, generating 9 chunks
config.video[0].storage.settings.chunking.tile.width = (config.video[0].camera.settings.shape[0] // 3)
config.video[0].storage.settings.chunking.tile.height = (config.video[0].camera.settings.shape[1] // 3)

# planes refers to the 3rd dimension of the chunks, so use 1 if each chunk is 2D
config.video[0].storage.settings.chunking.tile.planes = 1

# turn on multiscale mode
config.video[0].storage.settings.enable_multiscale = True

# Update the configuration with the chosen parameters 
config = runtime.set_configuration(config) 
```
## Collect and Inspect the Data
```python

# collect data
runtime.start()
runtime.stop()
```

You can inspect the Zarr file directory to check that the data saved as expected. Alternatively, you can inspect the data programmatically with:

```python
import json
import logging
import time
from time import sleep
from typing import Any, Dict, List, Optional

import acquire
import dask.array as da
import numcodecs.blosc as blosc
import pytest
import tifffile
import zarr
from acquire.acquire import DeviceKind, DeviceState, Runtime, Trigger
from ome_zarr.io import parse_url
from ome_zarr.reader import Reader
from skimage.transform

reader = Reader(parse_url("out.zarr"))
zgroup = list(reader())[0]

# loads each layer as a dask array from the Zarr dataset
data = [
    da.from_zarr("out.zarr", component=str(i))
    for i in range(len(zgroup.data))
]
assert len(data) == 3

image = data[0][0, 0, :, :].compute()  # convert dask array to numpy array
```