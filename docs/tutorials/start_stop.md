# Multiple Acquisitions

This tutorial will provide an example of starting, stopping, and restarting acquisition, or streaming from a video source. 

## Configure `Runtime`

To start, we'll create a `Runtime` object and configure the streaming process.

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

# Set the storage to trash to avoid saving the data
config.video[0].storage.identifier = dm.select(acquire.DeviceKind.Storage, "Trash")

# Set the time for collecting data for a each frame
config.video[0].camera.settings.exposure_time_us = 5e4  # 50 ms

config.video[0].camera.settings.shape = (1024, 768)

# Set the max frame count to 2**(64-1) the largest number supported by Uint64 for essentially infinite acquisition
config.video[0].max_frame_count = 100 # collect 100 frames

# Update the configuration with the chosen parameters 
config = runtime.set_configuration(config) 
```
## Working with `AvailableData` objects

During Acquisition, the `AvailableData` object is the streaming interface, and this class has a `frames` method which iterates over the `VideoFrame` objects in `AvailableData`. Once we start acquisition, we'll utilize this iterator method to list the frames. 


```python
# To increase the likelihood of `AvailableData` containing data, we'll utilize the time python package to introduce a delay before we create our `AvailableData` object

import time

# start acquisition
runtime.start()

# time delay of 0.5 seconds
time.sleep(0.5)

# grab the packet of data available on disk for video stream 0. This is an AvailableData object.
available_data = runtime.get_available_data(0) 
```
Once `get_available_data()` is called the `AvailableData` object will be locked into memory, so the circular buffer that stores the available data will overflow if `AvailableData` isn’t released.


There may not be data available, in which case our variable `available_data` would be `None`. To avoid errors associated with this circumstance, we'll only grab data if `available_data` is not `None`.


```python
# NoneType if there is no available data. We can only grab frames if data is available.
if available_data is not None:

       
    # frames is an iterator over available_data, so we'll use this iterator to make a list of the frames
    video_frames = list(available_data.frames())

else:         
    # delete the available_data variable if there is no data in the packet to free up RAM
    del available_data

```
`video_frames` is a list with each element being an instance of the `VideoFrame` class. `VideoFrame` has a `data` method which provides the frame as an `NDArray`. The shape of this NDArray corresponds to the image dimensions used internally by Acquire. Since we have a single channel, both the first and the last dimensions will be 1. The interior dimensions will be height and width, respectively.


```python
# grab the first VideoStream object in frames and convert it to an NDArray
first_frame = video_frames[0].data()

print(first_frame.shape)
```
Output:
```
(1, 768, 1024, 1) 
```

To grab the desired NDArray image data from `first_frame`, we'll slice the array as shown:
```python
image = image.squeeze()


print(image.shape)
```
Output:
```
(768, 1024)
``` 
Finally, delete the `available_data` to unlock the region in the circular buffer. 


```python  
# delete the available_data to free up disk space
del available_data

# stop runtime
runtime.stop()
```

def test_repeat_acq(runtime: Runtime):
    p = acquire.setup(runtime, "simulated: radial sin", "Trash")
    assert p.video[0].camera.identifier is not None
    assert p.video[0].storage.identifier is not None
    assert p.video[0].storage.settings.filename == "out.tif"
    p.video[0].camera.settings.shape = (192, 108)
    p.video[0].max_frame_count = 10
    p = runtime.set_configuration(p)
    runtime.start()
    while True:
        if a := runtime.get_available_data(0):
            logging.info(f"Got {a.get_frame_count()}")
            a = None
            break
    runtime.stop()
    assert runtime.get_available_data(0) is None
    # TODO: (nclack) assert 1 acquired frame. stop should block
    runtime.start()
    while True:
        if a := runtime.get_available_data(0):
            logging.info(f"Got {a.get_frame_count()}")
            a = None
            break
    runtime.stop()
    assert runtime.get_available_data(0) is None
    # TODO: (nclack) assert 1 more acquired frame. stop cancels and waits.


def test_repeat_with_no_stop(runtime: Runtime):
    """Stop is required between starts. This tests that an exception is
    raised."""
    p = acquire.setup(runtime, "simulated: radial sin", "Trash")
    assert p.video[0].camera.identifier is not None
    assert p.video[0].storage.identifier is not None
    p.video[0].camera.settings.shape = (192, 108)
    p.video[0].camera.settings.exposure_time_us = 1e4
    p.video[0].max_frame_count = 11
    p = runtime.set_configuration(p)
    runtime.start()
    # wait for 1 frame
    while True:
        if a := runtime.get_available_data(0):
            logging.info(f"Got {a.get_frame_count()}")
            a = None
            break
    # acq is still on going here
    with pytest.raises(RuntimeError):
        logging.info("Next start should fail gracefully")
        runtime.start()
    runtime.stop()
