#!/usr/bin/env bash
echo "Converting all .md tutorials to .py files..."
cd ./docs/tutorials;
for file in *.md; do
    # Perform action on each file
    if [ "$file" != "index.md" ]; then
        jupytext --to py $file
    fi
done
cd -
echo "Done."