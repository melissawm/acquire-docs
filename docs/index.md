---
title: Acquire Zarr Streaming
template: home_zarr.html
hide:
    - toc
---

Cloud-native file streaming solutions (e.g. file writers) are essential for building efficient image data acquisition
workflows, especially when acquiring more data than fits into memory or a single external hard drive.
[Zarr](https://zarr-specs.readthedocs.io/en/latest/specs.html) is a cloud-native data format that supports imaging data
and has strong early adoption within the imaging community. The [Acquire project](#about-the-acquire-project) developed
this standalone Zarr streaming library with bindings in both python and C. This library easily integrates into custom
acquisition workflows since it does not rely on runtime or hardware support.

## Installation

To install the `acquire-zarr` library on Windows, macOS, or Ubuntu, run the following command:

```bash
python -m pip install acquire-zarr
```
## Guides

<div class="cards">
    <div class="card">
        <h4>Python API Reference</h4>
        <p>Information on classes and methods</p>
        <a href="api_reference/zarr_api" class="button">Python API Reference</a>
    </div>
    <div class="card">
        <h4>C Interface Reference</h4>
        <p>Information on functions and structures</p>
        <a href="api_reference/c_api" class="button">C Interface Reference</a>
    </div>
    <div class="card">
        <h4>Python Examples</h4>
        <p>Examples that demonstrate how to use the Python library</p>
        <a href="https://github.com/acquire-project/acquire-zarr/tree/main/examples/python" class="button">Python Examples</a>
    </div>
    <div class="card">
        <h4>C Examples</h4>
        <p>Examples that demonstrate how to use the C interface</p>
        <a href="https://github.com/acquire-project/acquire-zarr/tree/main/examples/python" class="button">C Examples</a>
    </div>
</div>

## Citing `acquire-zarr`

TBA

## Acquire Zarr License

`acquire-zarr `is provided under an [Apache 2.0 license](https://github.com/acquire-project/acquire-zarr/blob/main/LICENSE).
[Learn more about the Apache license](https://www.apache.org/licenses/LICENSE-2.0).

## About the Acquire Project

The [Acquire Project](https://github.com/acquire-project) is a part of Chan Zuckerberg Initiative and is focused on
providing libraries to improve multicamera video streaming for microscopy. Check out the
[documentation on `acquire-imaging`,](acquire-imaging/index.md) a Python package providing a multi-camera video streaming library
focusing on performant microscopy.
