#!/usr/bin/env bash
echo "Converting all .md tutorials to .py files..."
dirname "${BASH_SOURCE[0]}"
cd ./docs/tutorials;
for file in *.md; do
    if [ "$file" != "index.md" ]; then
        jupytext --to py $file
    fi
done
cd -
echo "Done."