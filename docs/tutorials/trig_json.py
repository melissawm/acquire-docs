# ---
# jupyter:
#   jupytext:
#     cell_metadata_filter: -all
#     formats: md,py
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.5'
#       jupytext_version: 1.16.0
# ---

# # Triggers from a JSON file
#
# This tutorial will provide an example of saving and subsequently loading a `Trigger` object from a JSON file.
#
# ## Initialize Runtime
#
# To start, we'll import `Acquire` and create a `Runtime` object, which coordinates the streaming process.

import acquire
runtime = acquire.Runtime()

# ## Create a Trigger Object
#
# `Trigger` objects have 4 attributes: edge, enable, line, and kind. In this example, will only adjust the edge attribute.

# +
# Instantiate a Trigger object
trig = acquire.Trigger()

# change the edge attribute from the default Rising to Falling
trig.edge = acquire.TriggerEdge.Falling
# -

# ## Save Properties to a JSON file
# We'll utilize the [json library](https://docs.python.org/3/library/json.html#) to write our `Trigger` to a JSON file to save for subsequent acquisition.

# +
import json

# cast the properties to a dictionary
trig = trig.dict()

# convert the dictionary to json with "human-readable" formatting
trig = json.dumps(trig, indent=4, sort_keys=True)

# save the trigger to file "sample_trig.json" in the current directory
with open("sample_trig.json", "w") as outfile:
    outfile.write(trig)
# -

# ## Example JSON file
# The resulting sample_trig.json file is below:
#
# ~~~json
# {% include "../examples/sample_trig.json" %}
# ~~~
#
# ## Load Properties from a JSON file
# You can load the trigger attributes in the JSON file to a `Trigger` object as shown below:

# Instantiate a `Trigger` object from the settings in sample_trig.json
trig = acquire.Trigger(**json.load(open('sample_trig.json')))

# [Download this tutorial as a Python script](trig_json.py){ .md-button .md-button-center }
