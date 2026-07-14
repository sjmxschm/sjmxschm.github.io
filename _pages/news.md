---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

{% include base_path %}

<div class="news-list">
{% for item in site.data.news %}
<div class="news-item">
  <span class="news-date">{{ item.date }}</span>
  <span class="news-content">{{ item.content }}</span>
</div>
{% endfor %}
</div>
