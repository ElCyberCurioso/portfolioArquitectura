---
layout: default
title: Home
---

<div class="hero">
  <h1 class="hero-title">Ana Arquitecta</h1>
  <p class="hero-subtitle">Architect · Urban Designer · 3D Artist</p>
</div>

<section class="featured-projects">
  <h2 style="text-align: center; margin-bottom: 40px; font-size: 1.5rem; text-transform: uppercase; letter-spacing: 2px;">Selected Works</h2>
  
  <div class="project-list">
    {% for project in site.projects limit:3 %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
  
  <div style="text-align: center; margin-top: 50px;">
    <a href="{{ "/projects/" | relative_url }}" style="border-bottom: 1px solid #000; padding-bottom: 5px;">View All Projects</a>
  </div>
</section>
