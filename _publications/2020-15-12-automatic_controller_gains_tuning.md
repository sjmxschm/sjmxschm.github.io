---
title: "Gaussian Processes for Automatic Controller Gains Tuning in Robotics and Control (unpublished)"
collection: publications
permalink: /publication/2021-15-12-automatic_controller_gains_tuning
date: 2020-12-15
location: "Atlanta, GA"
venue: "(unpublished)"
excerpt: "This paper was the final documentation in the class ECE6254 Statistical Machine Learning and describes the use of Gaussian processes for automatic and safe controller gains tuning."
paperurl: "https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/ece_6254_gps_project_report.pdf"
citation: "Schmitz, Maximilian, Gray, Justin, Oh, Jaeyo, Lu, Yuwei, Kanwar, Bharat (2022). &quot;Gaussian Processes for Automatic Con-
troller Gains Tuning in Robotics and Control.&quot; <i>(unpublished)</i>."
---

Tuning controller parameters is one of the most fundamental problems when designing
controllers for dynamic systems and is usually done manually. To automate this, methods from machine learning, such as Bayesian Optimization, have been used. The downside is that this may lead to safety-critical failures when evaluating different controller parameters on a real system. This problem is solved in this paper by using an optimization algorithm, SafeOpt, which, given an initial, low-performance controller, automatically optimizes the parameters of a control law to guarantee safety. The controller parameters are evaluated by a performance function modeled by a Gaussian process. Only parameters with a performance higher than a certain threshold with high probability are considered as safe.

Recommended citation: Schmitz, Maximilian, Gray, Justin, Oh, Jaeyo, Lu, Yuwei, Kanwar, Bharat (2020). &quot;Gaussian Processes for Automatic Con-
troller Gains Tuning in Robotics and Control.&quot; <i>(unpublished)</i>.