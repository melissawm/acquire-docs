# Multiple Acquisitions

This tutorial will provide an example of starting, stopping, and restarting acquisition, or streaming from a video source. 

## Configure Streaming

To start, we'll create a `Runtime` object and configure the streaming process. To do this, we'll utilize the setup method. More information on that method is detailed in [this tutorial](https://acquire-project.github.io/acquire-docs/tutorials/setup).

```python
import acquire

# Initialize a Runtime object and set Video Source and Storage Device
config = acquire.setup(runtime, "simulated: radial sin", "Tiff")
    
config.video[0].storage.settings.filename == "out.tif"
config.video[0].camera.settings.shape = (192, 108)
config.video[0].max_frame_count = 10

# Update the configuration with the chosen parameters 
config = runtime.set_configuration(config) 
```

## Start, Stop, and Restart Acquisition

During Acquisition, the `AvailableData` object is the streaming interface. Upon shutdown, all of the objects created in the class are deleted to free up resources. To illustrate this, we'll print the type of `Available` data during acquisition and following shutdown.

There may not be data available, in which case our variable `available_data` would be `None`. To avoid errors associated with this circumstance, we'll only grab data if `available_data` is not `None`.

Explain how you must stop between starts. Stops are required between starts. Otherwise, an exception is raised.


```python
# start acquisition
runtime.start()

#
print(type(runtime.get_available_data))

runtime.stop()

print(type(runtime.get_available_data))

runtime.start()

# To increase the likelihood of `AvailableData` containing data, we'll utilize the time python package to introduce a delay before we create our `AvailableData` object

import time

# start acquisition
runtime.start()

# time delay of 0.5 seconds
time.sleep(0.5)
