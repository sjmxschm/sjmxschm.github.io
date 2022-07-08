---
title: "Machine and Deep Learning for Coating Thickness Prediction using Lamb Waves"
collection: publications
type: "Pre-Print"
permalink: /publication/2021-15-12-automatic_controller_gains_tuning.md
date: 2022-15-12
location: "Atlanta, GA"
excerpt: "This paper was the final documentation in the class ECE6254 Statistical Machine Learning and describes the use of Gaussian processes for automatic and safe controller gains tuning."
paperurl: "https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/ece_6254_gps_project_report.pdf"
citation: "Schmitz, Maximilian, Gray, Justin, Oh, Jaeyo, Lu, Yuwei, Kanwar, Bharat (2022). &quot;Gaussian Processes for Automatic Con-
troller Gains Tuning in Robotics and Control.&quot; <i>(unpublished)</i>."
---

This research applies machine and deep learning to nondestructively characterize the thickness and uniformity of a coating in a layered system using dispersion curves. A finite element analysis model is first used to computationally model transient, guided Lamb waves propagating in coated specimens with different coating thicknesses. These time-domain signals are then processed with a two-dimensional Fourier transform to obtain the corresponding frequency-wavenumber relation, which are the dispersion maps of the coated specimen. Dispersion maps are characteristic and depend on both the coating thickness and uniformity, plus its elastic properties (which are taken to be constant). Computationally simulated dispersion maps for a variety of coating properties are obtained and then further processed to extract a feature representation for each dispersion curve. Those extracted features are fed into machine learning classifiers which allow a thickness classification. This machine learning procedure is shown to be effective in classifying the thickness of a uniform coating. However, if the coating thickness is nonuniform, deep learning, specifically a convolutional neural network architecture, is used for classification. The network is evaluated and tested, and recommendations on its use are given

The paper was submitted to Wave Motion on 04/03/2022 and is currently under review.

[Download paper here](https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/Machine_Learning_Inv_Max_Schmitz_Paper_Preprint_online.pdf)

Recommended citation: Maximilian Schmitz, Jin-Yeon Kim, Laurence J. Jacobs. 2022. "Machine and Deep Learning for Coating Thickness Prediction using Lamb Waves." <i>Journal 1</i>. 1(1).