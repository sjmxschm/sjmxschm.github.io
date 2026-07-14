---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
---

{% include base_path %}

<p class="teaching-intro">Thoughts on robotics research, machine learning, competitions, and more. Coming soon: UN Robotics for Good Competition, transfer learning, and literature review posts.</p>

<div class="teaching-list">
{% for post in site.posts %}
  <div class="teaching-card">
    <div class="teaching-card__header">
      <span class="teaching-card__year">{{ post.date | date: "%B %Y" }}</span>
    </div>
    <h2 class="teaching-card__title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>
    {% if post.excerpt %}
      <p class="teaching-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
    {% endif %}
    <a href="{{ post.url | relative_url }}" class="teaching-card__link">Read more →</a>
  </div>
{% endfor %}

{% if site.posts.size == 0 %}
  <div class="pub-empty">
    <p>No posts yet — check back soon!</p>
  </div>
{% endif %}
</div>
