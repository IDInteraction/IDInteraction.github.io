---
layout: default
title: Tools
permalink: /tools/
---

# IDInteraction tools

We have made all of our source code and execution pipelines available under Open Source licences:

* Source code is [available in GitHub][idi-github].
* Execution pipelines are [available in the Docker Hub][idi-docker].

## Getting started

The only software needed to run these tools is [Docker][docker]. Please see the [installation instructions for your platform][dockerdocs] to get started.

The pipelines themselves will be automatically downloaded from the Docker Hub when they are first run.

## Using the helper scripts

These scripts are designed to run on Unix-like machines such as Linux and Mac OS X. They are provided as an easy way to run the pipelines described below.

There is [information on how to install and run them][tracking-tools] in GitHub.

* **[idi-init-tracking][tool-init]** - This gathers the information needed to initialize object tracking. It needs access to the input videos and a directory to save the tracking setup data to.

* **[idi-track][tool-track]** - This is the core object tracking tool in this collection. It takes the input videos and the outputs from ```idi-init-tracking``` and creates a ```CSV``` file with object tracking data in it.

* **[idi-replay-tracking][tool-replay]** - This tool takes all the data generated in the previous steps and combines it into a single video output; the object-tracked bounding box and bounding box center point are drawn into each video.

## Running the Docker pipelines directly

If you wish for more control over how the pipelines are run you can use Docker directly. Please see the [detailed instructions][pipe-readme] to do this.

[docker]: https://www.docker.com/
[dockerdocs]: https://docs.docker.com/
[idi-docker]: https://hub.docker.com/u/idinteraction/
[idi-github]: https://github.com/IDInteraction
[pipe-readme]: https://github.com/IDInteraction/tracking-tools#idi-crop-video
[tool-init]: https://github.com/IDInteraction/tracking-tools#idi-init-tracking
[tool-replay]: https://github.com/IDInteraction/tracking-tools#idi-replay-tracking
[tool-track]: https://github.com/IDInteraction/tracking-tools#idi-track
[tool-video]: https://github.com/IDInteraction/tracking-tools#idi-crop-video
[tracking-tools]: https://github.com/IDInteraction/tracking-tools
