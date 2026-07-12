---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
<p class="pub-scholar-link">Find my full list of articles on <a href="{{ author.googlescholar }}">my Google Scholar profile</a>.</p>
{% endif %}

{% include base_path %}

<div class="pub-filters">
  <div class="pub-filter-group">
    <span class="pub-filter-label">Year</span>
    <button class="pub-filter-btn active" data-filter="year" data-value="all">All</button>
    {% assign seen_years = "" | split: "" %}
    {% for post in site.publications reversed %}
      {% assign yr = post.date | date: "%Y" %}
      {% unless seen_years contains yr %}
        {% assign seen_years = seen_years | push: yr %}
        <button class="pub-filter-btn" data-filter="year" data-value="{{ yr }}">{{ yr }}</button>
      {% endunless %}
    {% endfor %}
  </div>
  <div class="pub-filter-group">
    <span class="pub-filter-label">Type</span>
    <button class="pub-filter-btn active" data-filter="type" data-value="all">All</button>
    {% assign seen_types = "" | split: "" %}
    {% for post in site.publications reversed %}
      {% if post.type %}
        {% unless seen_types contains post.type %}
          {% assign seen_types = seen_types | push: post.type %}
          <button class="pub-filter-btn" data-filter="type" data-value="{{ post.type }}">{{ post.type }}</button>
        {% endunless %}
      {% endif %}
    {% endfor %}
  </div>
</div>

<div class="pub-list" id="pub-list">
{% for post in site.publications reversed %}
  {% assign yr = post.date | date: "%Y" %}
  {% assign ptype = post.type | default: "Other" %}
  <div class="pub-card" data-year="{{ yr }}" data-type="{{ ptype }}">

    <div class="pub-card__header">
      {% if post.type %}
        <span class="pub-card__badge pub-card__badge--{{ ptype | slugify }}">{{ ptype }}</span>
      {% endif %}
      <span class="pub-card__year">{{ yr }}</span>
    </div>

    <h2 class="pub-card__title">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h2>

    {% if post.venue %}
      <p class="pub-card__meta"><span class="pub-card__venue">{{ post.venue }}</span></p>
    {% endif %}

    {% if post.excerpt %}
      <p class="pub-card__excerpt">{{ post.excerpt }}</p>
    {% endif %}

    <div class="pub-card__actions">

      {% if post.abstract %}
        <button class="pub-btn pub-btn--ghost pub-abstract-toggle" aria-expanded="false">
          Abstract <span class="pub-btn__chevron">▼</span>
        </button>
      {% endif %}

      {% if post.bibtex %}
        <button class="pub-btn pub-btn--ghost pub-bibtex-copy" data-bibtex="{{ post.bibtex | escape }}">
          Copy BibTeX
        </button>
      {% endif %}

      {% if post.paperurl %}
        <a href="{{ post.paperurl }}" class="pub-btn pub-btn--primary" target="_blank" rel="noopener noreferrer">
          View Paper
        </a>
      {% endif %}

      {% if post.preprint_url %}
        {% if post.open_access %}
          <a href="{{ post.preprint_url }}" class="pub-btn pub-btn--download" target="_blank" rel="noopener noreferrer">
            ↓ Download Paper
          </a>
        {% else %}
          <a href="{{ post.preprint_url }}" class="pub-btn pub-btn--download" target="_blank" rel="noopener noreferrer">
            ↓ Download Preprint
          </a>
        {% endif %}
      {% elsif post.open_access and post.paperurl %}
        <a href="{{ post.paperurl }}" class="pub-btn pub-btn--download" target="_blank" rel="noopener noreferrer">
          ↓ Download Paper
        </a>
      {% endif %}

    </div>

    {% if post.abstract %}
      <div class="pub-card__abstract" aria-hidden="true">
        <p>{{ post.abstract }}</p>
        {% if post.citation %}
          <p class="pub-card__citation"><strong>Citation:</strong> {{ post.citation }}</p>
        {% endif %}
      </div>
    {% endif %}

  </div>
{% endfor %}
</div>

<div class="pub-empty" id="pub-empty" style="display:none;">
  <p>No publications match the selected filters.</p>
</div>

<script>
(function () {
  var activeYear = 'all';
  var activeType = 'all';

  function filterCards() {
    var cards = document.querySelectorAll('.pub-card');
    var visible = 0;
    cards.forEach(function (card) {
      var yearMatch = activeYear === 'all' || card.dataset.year === activeYear;
      var typeMatch = activeType === 'all' || card.dataset.type === activeType;
      if (yearMatch && typeMatch) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });
    document.getElementById('pub-empty').style.display = visible === 0 ? '' : 'none';
  }

  document.querySelectorAll('.pub-filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var group = this.dataset.filter;
      var val = this.dataset.value;
      document.querySelectorAll('.pub-filter-btn[data-filter="' + group + '"]').forEach(function (b) {
        b.classList.remove('active');
      });
      this.classList.add('active');
      if (group === 'year') activeYear = val;
      if (group === 'type') activeType = val;
      filterCards();
    });
  });

  // Abstract toggle
  document.querySelectorAll('.pub-abstract-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = this.closest('.pub-card');
      var abstract = card.querySelector('.pub-card__abstract');
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      var chevron = this.querySelector('.pub-btn__chevron');
      if (chevron) chevron.textContent = expanded ? '▼' : '▲';
      abstract.classList.toggle('pub-card__abstract--open', !expanded);
      abstract.setAttribute('aria-hidden', String(expanded));
    });
  });

  // Copy BibTeX
  document.querySelectorAll('.pub-bibtex-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var bibtex = this.dataset.bibtex;
      var self = this;
      var originalText = self.textContent.trim();

      function showSuccess() {
        self.textContent = 'Copied!';
        self.classList.add('pub-btn--success');
        setTimeout(function () {
          self.textContent = originalText;
          self.classList.remove('pub-btn--success');
        }, 2000);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(bibtex).then(showSuccess).catch(function () {
          fallbackCopy(bibtex, showSuccess);
        });
      } else {
        fallbackCopy(bibtex, showSuccess);
      }
    });
  });

  function fallbackCopy(text, callback) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand('copy'); callback(); } catch (e) {}
    document.body.removeChild(ta);
  }
})();
</script>
