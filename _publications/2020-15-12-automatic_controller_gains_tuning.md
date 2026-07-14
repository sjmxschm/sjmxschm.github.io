---
title: "Gaussian Processes for Automatic Controller Gains Tuning in Robotics and Control (unpublished)"
collection: publications
type: "Report"
permalink: /publication/2021-15-12-automatic_controller_gains_tuning
date: 2020-12-15
location: "Atlanta, GA"
authors: "Maximilian Schmitz, Justin Gray, Jaeyo Oh, Yuwei Lu, Bharat Kanwar"
venue: "(unpublished)"
excerpt: 'Safe automatic controller tuning via Gaussian processes and Bayesian optimization with provable safety guarantees.'
abstract: 'Manually tuning controller parameters is fundamental but tedious and potentially unsafe when done on a real system. This paper applies SafeOpt — a Bayesian optimization algorithm — to automatically tune control law parameters while guaranteeing that performance never falls below a safety threshold. A Gaussian process models the performance function, and only parameter configurations with high-probability safe performance are evaluated, starting from a low-performance but safe initial controller.'
preprint_url: "https://github.com/sjmxschm/sjmxschm.github.io/raw/master/files/ece_6254_gps_project_report.pdf"
open_access: true
citation: "Schmitz, Maximilian, Gray, Justin, Oh, Jaeyo, Lu, Yuwei, Kanwar, Bharat (2022). &quot;Gaussian Processes for Automatic Con-
troller Gains Tuning in Robotics and Control.&quot; <i>(unpublished)</i>."
bibtex: |
  @techreport{Schmitz2020_gp,
    title = {Gaussian Processes for Automatic Controller Gains Tuning in Robotics and Control},
    author = {Schmitz, Maximilian and Gray, Justin and Oh, Jaeyo and Lu, Yuwei and Kanwar, Bharat},
    year = {2020},
    institution = {Georgia Institute of Technology},
    note = {unpublished, ECE6254 Statistical Machine Learning final project}
  }
---

Tuning controller parameters is one of the most fundamental problems when designing
controllers for dynamic systems and is usually done manually. To automate this, methods from machine learning, such as Bayesian Optimization, have been used. The downside is that this may lead to safety-critical failures when evaluating different controller parameters on a real system. This problem is solved in this paper by using an optimization algorithm, SafeOpt, which, given an initial, low-performance controller, automatically optimizes the parameters of a control law to guarantee safety. The controller parameters are evaluated by a performance function modeled by a Gaussian process. Only parameters with a performance higher than a certain threshold with high probability are considered as safe.

Recommended citation: Schmitz, Maximilian, Gray, Justin, Oh, Jaeyo, Lu, Yuwei, Kanwar, Bharat (2020). &quot;Gaussian Processes for Automatic Con-
troller Gains Tuning in Robotics and Control.&quot; <i>(unpublished)</i>.