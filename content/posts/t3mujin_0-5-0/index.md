---
title: "t3mujinpack 0.5.0 is out"
description: "Another revamp of the Portras, plus some more tweaks on other Kodak films"
date: 2019-01-20T11:11:11+01:00
type: "post"
draft: false
image: "images/portra_160vc_after.jpg"
---

After the release of version 0.4.0 it was brought to my attention that the “Portras” NC/UC/VC were a bit off. And it was true, I did some changes on those but you can say the Quality Control was severely lacking… Not an excuse, but that’s a problem of using some styles more others.

So the focus change on this version was getting those styles to work properly, starting almost from scratch, as it was suppose to happened in the previous version. The remaining updates in styles were incremental changes, more subtle and less dramatic.

Another change is the support for Windows, in the form of the only platform dependent feature: the uninstall script. Until now if you used t3mujinpack in Windows you had to uninstall it manually, each style separately, as the existing script only ran in Linux (or maybe Mac). Now there’s a batch file that allows you to do that. That also increased slightly the download size, as the Windows executable for sqlite had to be bundled.

Finally, a note on Darktable 2.6.0, t3mujinpack has already been tested with this version (both on Linux and Windows), but isn’t taking advantage yet of the new features, specially the new filmic module.


## Changelog
- Updated all Kodak Portra NC/VC/UC.
- New uninstaller script for Windows.
- Smaller tweaks on all Fuji Pro.
- Smaller tweaks on Kodak Ektachrome and Ektar.
- Smaller tweaks on Kodak Kodakchrome films.
- Smaller tweaks on Kodak Portra films.
- Smaller tweaks on Fuji Provia films.


## Download
**[Download it from Github](https://github.com/t3mujinpack/t3mujinpack/releases/download/v0.5.0/t3mujinpack_0-5-0.zip)**
