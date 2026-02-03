---
layout: default
title: Contact
---

<div class="contact-container">
  <h1 style="text-align: center; margin-bottom: 20px;">Get in Touch</h1>
  <p class="contact-intro">
    ¿Interesado en colaborar? Estoy siempre abierta a nuevos proyectos y oportunidades.
  </p>

  <div class="contact-email">
    <a href="mailto:contacto@arquitecto.com">contacto@arquitecto.com</a>
  </div>

  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
    <div class="form-group">
      <label for="name" class="form-label">Nombre</label>
      <input type="text" name="name" id="name" required class="form-control">
    </div>
    
    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input type="email" name="email" id="email" required class="form-control">
    </div>
    
    <div class="form-group">
      <label for="message" class="form-label">Mensaje</label>
      <textarea name="message" id="message" rows="5" required class="form-control"></textarea>
    </div>
    
    <button type="submit" class="btn-submit">Enviar Mensaje</button>
  </form>
  
  <p class="form-note">
    * Este formulario es una demostración. Para que funcione, regístrate en <a href="https://formspree.io" target="_blank">Formspree</a> y reemplaza 'YOUR_FORM_ID' con tu ID.
  </p>
</div>
