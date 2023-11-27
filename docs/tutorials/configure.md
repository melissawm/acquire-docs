# Configure an Acquisition

This tutorial will provide an in-depth explanations of setting configuration properites and demonstrage the relationships between various `Acquire` classes, such as `CameraProperties` and `StorageProperties`, used in the configuration process. In this example, we'll only configure one video source.

## Initialize `Runtime`

`Runtime` is the main entry point in Acquire. Through the runtime, you configure your devices, start acquisition, check acquisition status, inspect data as it streams from your cameras, and terminate acquisition. The `device_manager` method in `Runtime` creates an instance of the `DeviceManager` class. The `get_configuration` method in `Runtime` creates an instance of the `Properties` class. To configure the acquisition, we'll use those two methods to and grab the configuration and initialize a `DeviceManager` to set the attributes of those objects.

```python
import acquire

# Initialize a Runtime object
runtime = acquire.Runtime()

# Initialize the device manager
dm = runtime.device_manager()

# Grab the current configuration
config = runtime.get_configuration()
```

## Utilize `DeviceManager`

`DeviceManager` contains a `devices` method which creates a list of instances of the `DeviceIdentifier` class each representing a discovered camera or storage device. Each `DeviceIdentifier` has an attribute `kind` that is an instance of the `DeviceKind` class, which has attributes specifying whether the device is a camera or storage device, as well as `Signals` and `StageAxes` attributes. 

`DeviceManager` has 2 methods for selecting devices for the camera and storage. For more information on these methods, check out the [Device Selection tutorial](https://acquire-project.github.io/acquire-docs/tutorials/select/). We'll use the `select` method in this example to choose a specific device.

```python
# Select the radial sine simulated camera as the video source
config.video[0].camera.identifier = dm.select(acquire.DeviceKind.Camera, "simulated: radial sin") 

# Set the storage to trash to avoid saving the data
config.video[0].storage.identifier = dm.select(acquire.DeviceKind.Storage, "Tiff")
```

## `Properties` Class Explanation

Using `Runtime`'s `get_configuration` method we created `config`, an instance of the `Properties` class. `Properties` contains only one attribute `video` which is a tuple of instances of the `VideoStream` class since `Acquire` currently supports 2 camera streaming. To configure the first video stream, we'll index this tuple to select the first `VideoStream` object `config.video[0]`.

`VideoStream` objects have 2 attributes `camera` and `storage` which are instances of the `Camera` and `Storage` classes, respectively, and will be used to set the attributes of the selected camera device `simulated: radial sin` and storage device `Tiff`. The other attributes of `VideoStream` are integers that specify the maximum number of frames to collect and how many frames to average, if any, before storing the data. The `frame_average_count` has a default value of `0`, which disables this feature.

## Configure `Camera`
`Camera` class objects have 2 attributes, `settings`, a `CameraProperties` object, and an optional attribute `identifier`, which is an instance of the `DeviceIdentifier` class described above. 

`CameraProperties` has 5 attributes that are floats or integers and specify the exposure time and line interval in microseconds, how many pixels, if any, to bin (set to 1 to disable), and tuples for the image size and location on the camera chip. The other attributes are all instances of different classes. The `pixel_type` attribute is a `SampleType` object which indicates the data type of the pixel values in the image, such as Uint8. The `readout_direction` attribute is a `Direction` object specifying whether the data is read forwards or backwards from the camera. The `input_triggers` attribute is an `InputTriggers` object that details the characteristics of any input triggers in the system. The `output_triggers` attribute is an `OutputTriggers` object that details the characteristics of any output triggers in the system. All of the attributes of `InputTriggers` and `OutputTriggers` objects are instances of the `Trigger` class. The `Trigger` class is described in [this tutorial](https://acquire-project.github.io/acquire-docs/tutorials/trig_json/).

We'll configure some camera settings below.

```python
# Set the time for collecting data for a each frame
config.video[0].camera.settings.exposure_time_us = 5e4  # 50 ms

config.video[0].camera.settings.shape = (1024, 768)

# Specify the pixel type as Uint32
config.video[0].camera.settings.pixel_type = acquire.SampleType.U32
```

## Configure `Storage`
`Storage` class objects have 2 attributes, `settings`, a `StorageProperties` object, and an optional attribute `identifier`, which is an instance of the `DeviceIdentifier` class described above. 

`StorageProperties` has 2 attributes `external_metadata_json` and `filename` which are strings of the filename or filetree of the output metadata in JSON format and image data in whatever format corresponds to the selected storage device, respectively. `first_frame_id` is an integer ID that corresponds to the first frame of the current acquisition. `pixel_scale_um` is the pixel size in microns. `enable_multiscale` is a boolean used to specify if the data should be saved as an image pyramid. See the [multiscale tutorial](https://acquire-project.github.io/acquire-docs/tutorials/multiscale/) for more information. The `chunking` attribute is an instance of the `ChunkingProperties` class, used for Zarr storage. See the [chunking tutorial](https://acquire-project.github.io/acquire-docs/tutorials/multiscale/) for more information.

We'll specify the name of the output image file below.

```python
# Set the output file to out.tiff
config.video[0].storage.settings.filename = "out.tiff"
```

# Update Configuration Settings
None of the configuration settings are updated in `Runtime` until the `set_configuration` method is used. We'll be creating a new `Properties` object with the `set_configuration` method. For simplicity, we'll use `config` for the name of that object as well, but note that `new_config = runtime.set_configuration(config)` also works here. 

```python
# Update the configuration with the chosen parameters 
config = runtime.set_configuration(config) 
```
