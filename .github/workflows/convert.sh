#!/usr/bin/env bash
echo "Converting all .md tutorials to .py files..."
TUTS_DIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )/../../docs/tutorials"
pushd ${TUTS_DIR}
for subdir in */; do
    pushd $subdir
    for file in *.md; do
        if [ "$file" != "index.md" ] && [ "$file" != "livestream.md" ]; then
            jupytext --to py $file
        fi
    done
    popd
done
popd
echo "Done."
