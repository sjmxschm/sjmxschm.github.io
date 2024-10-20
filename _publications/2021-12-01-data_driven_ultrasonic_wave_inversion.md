---
title: "Machine and Deep Learning for Coating Thickness Prediction using Lamb Waves"
collection: publications
type: "Journal Article"
permalink: /publication/2021-12-01-data_driven_ultrasonic_wave_inversion
venue: "Wave Motion"
date: 2022-04-04
location: "Atlanta, GA"
excerpt: "This research investigates the use of machine and deep learning methods for wave inversion in nondestructive evaluation."
paperurl: "https://www.sciencedirect.com/science/article/abs/pii/S0165212523000239"
citation: "Maximilian Schmitz, Jin-Yeon Kim, Laurence J. Jacobs,
Machine and deep learning for coating thickness prediction using Lamb waves,
Wave Motion,
Volume 120,
2023,
103137,
ISSN 0165-2125,
https://doi.org/10.1016/j.wavemoti.2023.103137."
---

This research applies machine and deep learning to nondestructively characterize the thickness and uniformity of a coating in a layered system using dispersion curves. A finite element analysis model is first used to computationally model transient, guided Lamb waves propagating in coated specimens with different coating thicknesses. These time-domain signals are then processed with a two-dimensional Fourier transform to obtain the corresponding frequency-wavenumber relation, which are the dispersion maps of the coated specimen. Dispersion maps are characteristic and depend on both the coating thickness and uniformity, plus its elastic properties (which are taken to be constant). Computationally simulated dispersion maps for a variety of coating properties are obtained and then further processed to extract a feature representation for each dispersion curve. Those extracted features are fed into machine learning classifiers which allow a thickness classification. This machine learning procedure is shown to be effective in classifying the thickness of a uniform coating. However, if the coating thickness is nonuniform, deep learning, specifically a convolutional neural network architecture, is used for classification. The network is evaluated and tested, and recommendations on its use are given

[Download preprint here](https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/Machine_Learning_Inv_Max_Schmitz_Paper_Preprint_online.pdf)

Recommended citation: 

```
@article{SCHMITZ2023103137,
title = {Machine and deep learning for coating thickness prediction using Lamb waves},
journal = {Wave Motion},
volume = {120},
pages = {103137},
year = {2023},
issn = {0165-2125},
doi = {https://doi.org/10.1016/j.wavemoti.2023.103137},
url = {https://www.sciencedirect.com/science/article/pii/S0165212523000239},
author = {Maximilian Schmitz and Jin-Yeon Kim and Laurence J. Jacobs},
keywords = {Machine learning, Deep learning, Inversion, Wave propagation, Lamb wave, Fourier transform}
```