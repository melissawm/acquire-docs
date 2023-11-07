# Writing to Compressed Zarr Files

This tutorial will provide an example of writing compressed data to a Zarr file.

`Acquire` supports streaming compressed data to the `ZarrBlosc1*` storage devices. Compression is done via [Blosc](https://www.blosc.org/pages/blosc-in-depth/).
Supported codecs are _lz4_ and _zstd_, available with **ZarrBlosc1Lz4ByteShuffle** and **ZarrBlosc1ZstdByteShuffle** devices, respectively. For a comparison of these codecs, please refer to the [Blosc docs](https://www.blosc.org/). You can learn more about the Zarr capabilities in `Acquire` [here](https://github.com/acquire-project/acquire-driver-zarr).

## Configure `Runtime`

To start, we'll create a `Runtime` object and configure the streaming process, selecting `ZarrBlosc1ZstdByteShuffle` as the storage device to enable compressing the data.

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

# Set the storage to ZarrBlosc1ZstdByteShuffle to avoid saving the data
config.video[0].storage.identifier = dm.select(acquire.DeviceKind.Storage, "ZarrBlosc1ZstdByteShuffle")

# Set the time for collecting data for a each frame
config.video[0].camera.settings.exposure_time_us = 5e4  # 50 ms

config.video[0].camera.settings.shape = (1024, 768)

# Set the max frame count
config.video[0].max_frame_count = 100 # collect 100 frames

# Set the output file to out.zarr
config.video[0].storage.settings.filename = "out.zarr"

# Update the configuration with the chosen parameters 
config = runtime.set_configuration(config) 
```
## Inspect Acquired Data

Now that the configuration is set to utilize the `ZarrBlosc1ZstdByteShuffle` storage device, we can acquire data, which will be compressed before it is stored to `out.zarr`.

```python
# acquire data
runtime.start()
runtime.stop()
```
We'll use the [Zarr Python package](https://zarr.readthedocs.io/en/stable/) to read the data in `out.zarr` file. 
```python
# We'll utilize the Zarr python package to read the data
import zarr

# load from Zarr
compressed = zarr.open(config.video[0].storage.settings.filename)
```
INSERT explanation of zarr group hierarchy. 

We'll print some of the data properties to illustrate how the data was compressed.

```python
# 
data = compressed["0"]

print(data.compressor.cname)
print(data.compressor.clevel)
print(data.compressor.shuffle)
```

Output:
```
zstd
1
1
```
As expected, the file was compressed using the `zstd` codec.
