---
title: "Instructions"
description: Usage details and other relevant information
date: 2023-09-17T15:29:04+01:00
draft: false
image: "/images/banner.jpg"
---

# Install/Uninstall/Upgrade

Requirements: These presets are for Darktable only! This version has been tested with Darktable 4.4.x , specially the uninstall script.

## Download
The release package, from version 0.6.0 onwards, comes in two flavors: **flat** and **one-level**, all have the same funcionality but displayed in a different structure in the Lighttable and Darkroom modes. You should download the one that suits you the most, between having all styles in a flat list or separated by film type.

### Flat hierarchy
Shows the full, big list without any hierarchy, the way the presets have been show in Darktable until know, ex:

- t3mujinpack – Black and White – Ilford Delta 400
- t3mujinpack – Color Negative – Fuji Pro 160C
- t3mujinpack – Color Negative – Fuji Pro 400H
- t3mujinpack – Color Slide – Kodak Ektachrome 100 GX
- …

### One-level hierarchy
Groups presets into three different sections (Color Slide, Color Negative and Black & White), the presets will appear like this in Darktable styles interface:

- t3mujinpack – Black and White
    - Ilford Delta 400
    - …
- t3mujinpack – Color Negative
    - Fuji Pro 160C
    - Fuji Pro 400H
    - …
- t3mujinpack – Color Slide
    - Kodak Ektachrome 100 GX
    - …

## Install
- Go to Styles box in Lighttable mode.
- Click Import and select all or only the ones you want to install.

It should become available in the styles box or the styles quick access icon in Darkroom mode.

## Uninstall
- Close Darktable.
- Open a Terminal window.
- Go to the folder where the styles were extracted.Run the uninstall script (remove_t3mujinpack.sh for Linux, remove_t3mujinpack.bat for Windows)..
    - This script will try to locate the Darktable database files at its default location. If, for some reason, those are at a different location you can pass that as a script parameter: remove_t3mujinpack.sh /some/folder/data.db
    - A list of installed styles will be shown before deletion.

Styles can also be deleted from Darktable’s Styles box in Lighttable mode.

## Upgrade

There is no direct way to upgrade the styles, the solution is to reinstall them.

Run the Uninstall steps above, it won’t remove the edited images or even delete the keywords associated with the tags.
Install the styles following the steps from above.

# Usage
## TLDR
Just open the image, adjust the basic settings, apply the selected preset, and you’re ready to go.
## The slightly longer version
The big premise of these styles is that it's not a one stop for the entire processing performed on one photo. This means there's no change in the "core" modules of Darktable, and any of those modules will be included in these.

By default the basecurve module isn’t disabled when styles are applied, but feel free to disable it. It’s highly recommended to have the White Balance adjusted to a somehow neutral setting (minor tweaks in temperature and tint are ok) and the same goes with exposure or shadows and highlights before applying the style, this is so that the base image is relatively plain and clean to be a good starting point to apply the style and have the expected result; if you use a enabled more extreme custom base curve that’s radically different from the default or have other modules in the pipeline adding contrast, then unexpected results could happen. These styles aren’t meant to be a final result and further adjustments after applying the styles are expected and highly recommended.