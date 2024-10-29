---
title: "Deep Learning in Ultrasonic Wave Inversion for Thin Coatings"
collection: publications
type: "Master Thesis"
permalink: /publication/2022-01-14-deep_learning_in_ultrasonic_waves_master_thesis
venue: "Georgia Tech"
date: 2022-01-14
location: "Atlanta, GA"
excerpt: "This research focuses on the use of machine and deep learning to non-destructively characterize the quality of a coating in a layered system in terms of thickness and uniformness."
paperurl: "http://hdl.handle.net/1853/66518"
citation: "Maximilian Schmitz, Deep Learning in Ultrasonic Wave Inversion for Thin Coatings, Master’s Thesis, Georgia Institute of Technology, Atlanta, GA, 2022."
---

This research focuses on the use of machine and deep learning to non-destructively characterize the quality of a coating in a layered system in terms of thickness and uniformness. The coating's parameters (thickness and uniformness) are evaluated using dispersion curves. To obtain these dispersion curves in the first step, this work uses a computational finite element analysis (FEA) model to obtain dispersion data for coated specimen with different thicknesses. The simulated FEA data is then processed via a two-dimensional Fourier transform to obtain a frequency - wave number relation. This representation is a dispersion curve. Dispersion curves are characteristic and depend on the coating thickness and uniformness. Simulated dispersion curves for various coatings are obtained. They are then further processed and a feature representation for each dispersion curve is extracted. Those extracted features are then fed into machine learning classifiers which allow a thickness classification. The above-described machine learning procedure is limited to classifying the thickness of a uniform coating. To classify if a non-uniformess is present, deep learning steps in. To obtain information about if a coating is uniform, two convolutional neural network architectures are used. Both networks are evaluated and tested and recommendations on their use are given.

[Download my thesis here](https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/SCMITZ-THESIS-2022.pdf)

Recommended citation: 

```
@thesis{Schmitz2022_thesis,
  type = {mathesis},
  title = {Deep Learning in Ultrasonic Wave Inversion for hin Coatings},
  author = {Schmitz, Maximilian},
  date = {2022},
  institution = {Georgia Institute of Technology},
  location = {Atlanta, GA}
}
```