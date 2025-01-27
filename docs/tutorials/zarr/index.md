# Zarr

These tutorials will help you learn about using Zarr with Acquire. Please
[submit an issue on GitHub](https://github.com/acquire-project/acquire-docs/issues/new)
if you'd like to request a tutorial. If you are also interested in contributing
to this documentation, please visit our
[contribution guide](https://acquire-project.github.io/acquire-docs/dev/for_contributors/).

## Python examples

- [Writing to Compressed Zarr Files](./compressed.md)
- [Zarr V3 with LZ4 compression to filesystem](https://github.com/acquire-project/acquire-zarr/blob/main/examples/python/leak-checker.py)
- [Basic Zarr V2 to filesystem](https://github.com/acquire-project/acquire-zarr/blob/main/examples/python/zarrv2-compressed-multiscale-filesystem.py)
- [Zarr V2 with ZSTD compression to S3](https://github.com/acquire-project/acquire-zarr/blob/main/examples/python/zarrv2-compressed-s3.py)
- [Basic Zarr V2 to filesystem - raw](https://github.com/acquire-project/acquire-zarr/blob/main/examples/python/zarrv2-raw-filesystem.py)
- [Zarr V3 with LZ4 compression to filesystem](https://github.com/acquire-project/acquire-zarr/blob/main/examples/python/zarrv3-compressed-filesystem.py)
- [zarr_v3_s3_raw.py](https://github.com/acquire-project/acquire-zarr/blob/main/examples/python/zarrv3-raw-s3.py)

## C examples

- [Zarr V2 with ZSTD compression to S3](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv2-compressed-s3.c)
- [Basic Zarr V2 streaming to filesystem](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv2-raw-filesystem.c)
- [Zarr V3 with LZ4 compression to filesystem](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv3-compressed-filesystem.c)
- [Multiscale Zarr V3 with compressed data to S3](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv3-compressed-multiscale-s3.c)
- [Stream data to a Zarr V3 store with Zstd compression data on S3](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv3-compressed-s3.c)
- [Basic Zarr V3 streaming to filesystem](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv3-raw-filesystem.c)
- [Uncompressed streaming to a Zarr V3 store on the filesystem, with multiple levels of detail](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv3-raw-multiscale-filesystem.c)
- [Zarr V3 with uncompressed data to S3](https://github.com/acquire-project/acquire-zarr/blob/main/examples/zarrv3-raw-s3.c)
