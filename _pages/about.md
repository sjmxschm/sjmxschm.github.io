---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a first year **[ELLIS](https://ellis.eu/) Robotics PhD Student** at the [Learning Algorithms and Systems Laboratory](https://www.epfl.ch/labs/lasa/) within EPFL where I work on transfer learning for robotics. I have a strong background in autonomous systems, machine learning, and applied mathematics. My career spans both industry and academia, with hands-on experience in research, robotics, and innovative product development.

<div class="about-edu-row">
  <div class="cv-entry__logo--stack">
    <span class="logo-wrap"><img src="{{ '/images/logos/EPFL_Logo_Digital_RGB_PROD.png' | relative_url }}" alt="EPFL"></span>
    <span class="logo-wrap logo-wrap--ellis"><img src="{{ '/images/logos/ELLIS_logo.png' | relative_url }}" alt="ELLIS" onerror="this.closest('.logo-wrap').style.display='none'"></span>
  </div>
  <div class="about-edu-row__text"><strong>PhD in Robotics, Control &amp; Intelligent Systems</strong> at <a href="https://www.epfl.ch/labs/lasa/">LASA, EPFL</a> &mdash; <a href="https://ellis.eu/">ELLIS</a> PhD Program in Robotics.</div>
</div>

Before, I served as the **Lead Control Engineer at Yamaha Motor Corporation's Marine Innovation Center** in Kennesaw, GA. In this role, I designed **advanced marine control systems**, lead collaborations with research institutions, and developed **cutting-edge driver assistance systems (ADAS)** for recreational boats. My work not only advanced marine technology, but also contributed to industry-wide safety standards in collaboration with the **American Boat and Yacht Council (ABYC)**.

Previously, I developed **low- and high-level control algorithms** for Yamaha's [**auto-docking product DockPoint**](https://vimeo.com/798535908/44e54a1bf0), the first of its kind for recreational boats, ensuring alignment with technical standards and spearheading its market release.

Before joining Yamaha, I pursued two master's degrees:

<div class="about-edu-row">
  <span class="logo-wrap"><img src="{{ '/images/logos/unistuttgart_logo_englisch_cmyk-01.png' | relative_url }}" alt="Uni Stuttgart"></span>
  <div class="about-edu-row__text"><strong>Master of Engineering Cybernetics</strong> at the <a href="https://www.uni-stuttgart.de/en/">University of Stuttgart</a>, focusing on <b>nonlinear dynamics</b> and <b>systems theory</b>.</div>
</div>

<div class="about-edu-row">
  <span class="logo-wrap"><img src="{{ '/images/logos/GeorgiaTech_RGB.png' | relative_url }}" alt="Georgia Tech"></span>
  <div class="about-edu-row__text"><strong>Master of Engineering Science and Mechanics</strong> at the <a href="https://www.gatech.edu/">Georgia Institute of Technology</a>, applying <b>deep learning</b> and <b>computer vision</b> for material characterization.</div>
</div>

Throughout my academic journey, I conducted research across multiple countries, including the **Georgia Tech's Nondestructive Evaluation Lab** and an **exchange at the University of Padua**. I excel at integrating machine learning with engineering disciplines, having used **deep learning** to predict material properties with ultrasonic waves. Additionally, I worked with **real-time robotic control systems** at the University of Stuttgart, where I developed low-level control strategies for the quadrupedal robot RAMbi.

In my free time, I enjoy producing electronic music, playing the piano, and DJing. I'm also passionate about recreational sports both indoor like BJJ and team handball, and outdoor like skiing and scuba diving, which balances my technical work with creative and physical challenges.

Whether developing innovative marine technology, producing music, or pursuing research, I thrive at the intersection of creativity, engineering, and leadership.

<h2 class="news-section-title">News</h2>

<div class="news-list">
{% for item in site.data.news limit:5 %}
<div class="news-item">
  <span class="news-date">{{ item.date }}</span>
  <span class="news-content">{{ item.content }}</span>
</div>
{% endfor %}
</div>

