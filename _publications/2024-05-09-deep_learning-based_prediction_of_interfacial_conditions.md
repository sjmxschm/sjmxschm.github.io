---
title: "Deep learning-assisted locating and sizing of a coating delamination using ultrasonic guided waves"
collection: publications
type: "Conference Paper"
permalink: /publication/2024-05-09-deep_learning-based_prediction_of_interfacial_conditions
venue: " SPIE Smart Structures + Nondestructive Evaluation"
date: 2024-05-09
location: "Atlanta, GA"
excerpt: "This research investigates the use of an LSTM to predict interfacial conditions on a coated plate."
paperurl: "https://doi.org/10.1117/12.3010200"
citation: "Junzhen Wang, Maximilian Schmitz, Laurence J. Jacobs, and Jianmin Qu, Deep learning-based prediction of interfacial conditions in coated plates using guided waves, Proc. SPIE 12951, Health Monitoring of Structural and Biological Systems XVIII, 129511F (9 May 2024); https://doi.org/10.1117/12.3010200."
---

This paper proposes a framework of using deep learning-assisted methods for the prediction of interfacial conditions in coated plates using guided wave data. The coating-substrate interface is modeled as a linear spring layer of zero thickness, and the mechanical behavior of this spring layer is characterized by the spring compliance. Both tangential and normal spring compliances are introduced to characterize the bond quality. Numerical simulations are conducted for a wide range of spring compliances to generate the corresponding dispersion curves. A Long Short-Term Memory (LSTM) network is utilized to predict the interfacial conditions. In addition, we consider the delamination cases where the coating layer is completely separated from the substrate over the delaminated region. Finite element simulations are carried out to model guided wave generation, propagation, interaction with delamination, and reception. The time-space images are formed by measuring the time-domain signals by receivers at several locations downstream from the source transducer, which are then fed into the developed Convolutional Neural Network (CNN). Once trained, this Deep-Learning (DL) model enables the accurate prediction of delamination location and size. Results of this paper demonstrate that the proposed methodologies have tremendous potential for characterizing interfacial conditions in practical Nondestructive Evaluation (NDE) and Structural Health Monitoring (SHM) applications.

<!--
[Download preprint here](https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/Machine_Learning_Inv_Max_Schmitz_Paper_Preprint_online.pdf)
-->

Recommended citation: 

```
@inproceedings{10.1117/12.3010200,
author = {Junzhen Wang and Maximilian Schmitz and Laurence J. Jacobs and Jianmin Qu},
title = {{Deep learning-based prediction of interfacial conditions in coated plates using guided waves}},
volume = {12951},
booktitle = {Health Monitoring of Structural and Biological Systems XVIII},
editor = {Zhongqing Su and Kara J. Peters and Fabrizio Ricci and Piervincenzo Rizzo},
organization = {International Society for Optics and Photonics},
publisher = {SPIE},
pages = {129511F},
keywords = {Guided waves, Deep learning, Coated plates, Interface, Delamination, Nondestructive evaluation, Structural health monitoring},
year = {2024},
doi = {10.1117/12.3010200},
URL = {https://doi.org/10.1117/12.3010200}
}
```