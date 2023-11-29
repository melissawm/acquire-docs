# Multiple Acquisitions

This tutorial will provide an example of starting, stopping, and restarting acquisition, or streaming from a video source. 

## Configure Streaming

To start, we'll create a `Runtime` object and configure the streaming process. To do this, we'll utilize the setup method. More information on that method is detailed in [this tutorial](https://acquire-project.github.io/acquire-docs/tutorials/setup).

```python
import acquire

# Initialize a Runtime object
runtime = acquire.Runtime()

# Grarb Set Video Source and Storage Device
config = acquire.setup(runtime, "simulated: radial sin", "Tiff")
    
config.video[0].storage.settings.filename == "out.tif"
config.video[0].camera.settings.shape = (192, 108)
config.video[0].camera.settings.exposure_time_us = 10e4
config.video[0].max_frame_count = 10

# Update the configuration with the chosen parameters 
config = runtime.set_configuration(config) 
```

## Start, Stop, and Restart Acquisition

During Acquisition, the `AvailableData` object is the streaming interface. Upon shutdown, `Runtime` deletes all of the objects created during acquisition to free up resources, and you must stop acquisition by calling `runtime.stop()` between acquisitions. Otherwise, an exception will be raised.

To understand how acquisition works, we'll start, stop, and repeat acquisition and print the `DeviceState`, which can be `Armed`, `AwaitingConfiguration`, `Closed`, or `Running`, and the `AvailableData` object throughout the process.

If acquisition has ended, all of the objects are deleted, including `AvailableData` objects, so those will be `None` when not acquiring data. In addition, if enough time hasn't elapsed since acquisition started, `AvailableData` will also be `None`. We'll utilize the `time` python package to introduce time delays to account for these facts. 

```python
# package used to introduce time delays
import time

# start acquisition
runtime.start()

print(runtime.get_state())
print(runtime.get_available_data(0))

# wait 0.5 seconds to allow time for data to be acquired
time.sleep(0.5)

print(runtime.get_state())
print(runtime.get_available_data(0))

# stop acquisition
runtime.stop()

print(runtime.get_state())
print(runtime.get_available_data(0))

# start acquisition
runtime.start()

# time delay of 5 seconds - acquisition only runs for 1 second
time.sleep(5)

print(runtime.get_state())
print(runtime.get_available_data(0))

# stop acquisition
runtime.stop()
```

The output will be:

```
DeviceState.Running
None
DeviceState.Running
<builtins.AvailableData object at 0x00000218D685E5B0>
DeviceState.Armed
None
DeviceState.Armed
<builtins.AvailableData object at 0x00000218D685E3D0>
```
1. The first time we print states is immediately after we started acqusition and enough time hasn't elapsed for data to be collected based on the exposure time, so the camera is running but there is no data yet.
2. The next print happens after waiting 0.5 seconds, so acquisition is still runnning and now there is acquired data available.
3. The subsequent print is following calling `runtime.stop()` which terminates acquisition after the specified max number of frames are collected, so the device is no longer running, although it is in the `Armed` state ready for acquisition, and there is no available data.
4. The final print occurs after waiting 5 seconds after starting acquisition, which is longer than the 1 second time needed to collect all the frames, so the device is no longer collecting data. However, `runtime.stop()` hasn't been called, so the `AvailableData` object has not yet been deleted.
