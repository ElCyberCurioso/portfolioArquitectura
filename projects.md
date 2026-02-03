---
layout: default
title: Projects
permalink: /projects/
---

<h1 style="margin-bottom: 40px; text-align: center;">Portfolio</h1>

<div class="project-list">
  {% for project in site.projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>
