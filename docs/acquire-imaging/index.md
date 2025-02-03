---
title: Acquire Docs
template: home.html
---

## Guides

<div class="cards">
    <div class="card">
        <h4>Get Started</h4>
        <p>Install Acquire and use simulated cameras</p>
        <a href="get_started" class="button">Get Started</a>
    </div>
    <div class="card">
        <h4>API Reference</h4>
        <p>Information on classes and methods</p>
        <a href="api_reference" class="button">API Reference</a>
    </div>
    <div class="card">
        <h4>Tutorials</h4>
        <p>Guides on using Acquire for specific tasks</p>
        <a href="tutorials" class="button">Tutorials</a>
    </div>
    <div class="card">
        <h4>For contributors</h4>
        <p>Learn how to contribute code or documentation to Acquire</p>
        <a href="../for_contributors" class="button">For contributors</a>
    </div>
</div>

##  About Acquire

[Acquire](https://github.com/acquire-project/acquire-python) (`acquire-imaging` on [PyPI](https://pypi.org/project/acquire-imaging/)) provides high-speed, multi-camera, video streaming and image acquisition with a [programming interface](api_reference.md) for streaming video data directly to [napari](https://napari.org/stable/), Python and cloud-friendly file formats.

## Installation

To install Acquire on Windows, macOS, or Ubuntu, simply run the following command:

```
python -m pip install acquire-imaging
```

## Supported Cameras and File Formats
Acquire supports the following cameras (currently only on Windows):

- [Hamamatsu Orca Fusion BT (C15440-20UP)](https://www.hamamatsu.com/eu/en/product/cameras/cmos-cameras/C15440-20UP.html)
- [Vieworks VC-151MX-M6H00](https://www.visionsystech.com/products/cameras/vieworks-vc-151mx-sony-imx411-sensor-ultra-high-resolution-cmos-camera-151-mp)
- [FLIR Blackfly USB3 (BFLY-U3-23S6M-C)](https://www.flir.com/products/blackfly-usb3/?model=BFLY-U3-23S6M-C&vertical=machine+vision&segment=iis)
- [FLIR Oryx 10GigE (ORX-10GS-51S5M-C)](https://www.flir.com/products/oryx-10gige/?model=ORX-10GS-51S5M-C&vertical=machine+vision&segment=iis)

For testing and demonstration purposes, Acquire also provides a few simulated video sources. For more information on supported cameras and video sources, check out [this tutorial](./tutorials/setup_acquisition/drivers.md).

Acquire supports the following output file formats:

- [Tiff](https://en.wikipedia.org/wiki/TIFF)
- [OME-Zarr](https://ngff.openmicroscopy.org/latest/) for [Zarr v2](https://zarr.readthedocs.io/en/stable/spec/v2.html)
- [Zarr v3](https://zarr.readthedocs.io/en/stable/spec/v3.html)

Acquire also supports raw and trash storage devices. For more information on supported file formats and storage devices, check out the [Storage Device Selection tutorial](./tutorials/setup_acquisition/storage.md).

## Citing Acquire

~~~
{% include "../CITATION.cff" %}
~~~

## Acquire License
`Acquire` is provided under an [Apache 2.0 license](https://github.com/acquire-project/acquire-python/blob/main/LICENSE). [Learn more about the Apache license](https://www.apache.org/licenses/LICENSE-2.0).
