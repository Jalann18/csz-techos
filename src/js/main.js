/**
 * main.js — Punto de entrada principal — CSZ Techos
 */

import '../css/style.css';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';

/* ════════════════════════════════════════════════════════════════
   ⚙️  CONFIGURACIÓN GLOBAL DE CONTACTO — CSZ Techos
   ════════════════════════════════════════════════════════════════ */
const CONFIG = {
  // WhatsApp en formato internacional, SOLO números (sin +, sin espacios)
  whatsapp: "56940651240",
  // Mensaje que aparece escrito al abrir WhatsApp
  whatsappMensaje: "Hola CSZ Techos, necesito una inspección/reparación de techo urgente",
  // Teléfono para mostrar y para llamar
  telefonoMostrar: "+56 9 4065 1240",
  telefonoLlamar:  "56940651240",
  // Correo de contacto
  correo: "cszreparaciones@gmail.com",
  // Redes sociales (pega el enlace completo; deja "" para ocultar el ícono)
  instagram: "",
  facebook:  "",
  tiktok:    ""
};

function aplicarConfig() {
  const waMsg = encodeURIComponent(CONFIG.whatsappMensaje);
  const waURL = "https://wa.me/" + CONFIG.whatsapp + "?text=" + waMsg;
  const waURLsimple = "https://wa.me/" + CONFIG.whatsapp;

  document.querySelectorAll('a[href*="wa.me"], a[data-wa]').forEach(a => {
    a.href = a.hasAttribute('data-wa-simple') ? waURLsimple : waURL;
  });

  if (CONFIG.telefonoMostrar.toLowerCase().includes('prox') || CONFIG.telefonoMostrar.toLowerCase().includes('próx')) {
    document.querySelectorAll('[data-tel-text]').forEach(el => {
      el.textContent = CONFIG.telefonoMostrar;
      const link = el.tagName === 'A' ? el : el.closest('a');
      if (link) {
        link.href = '#contacto';
        link.removeAttribute('data-wa');
        link.removeAttribute('target');
      }
    });
    document.querySelectorAll('[data-tel-link]').forEach(a => {
      a.href = '#contacto';
    });
  } else {
    document.querySelectorAll('[data-tel-link]').forEach(a => a.href = "tel:+" + CONFIG.telefonoLlamar);
    document.querySelectorAll('[data-tel-text]').forEach(el => el.textContent = CONFIG.telefonoMostrar);
  }

  if (CONFIG.correo.toLowerCase().includes('prox') || CONFIG.correo.toLowerCase().includes('próx')) {
    document.querySelectorAll('[data-mail]').forEach(a => {
      a.href = '#contacto';
      a.textContent = CONFIG.correo;
      a.removeAttribute('target');
    });
  } else {
    document.querySelectorAll('[data-mail]').forEach(a => {
      a.href = "mailto:" + CONFIG.correo;
      a.textContent = CONFIG.correo;
    });
  }

  const redes = { instagram: CONFIG.instagram, facebook: CONFIG.facebook, tiktok: CONFIG.tiktok };
  Object.entries(redes).forEach(([k, url]) => {
    document.querySelectorAll('[data-red="' + k + '"]').forEach(a => {
      if (url) {
        a.href = url;
        a.style.display = '';
      } else {
        a.style.display = 'none';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  aplicarConfig();
  initNavigation();
  initAnimations();
  console.log('%c🏠 CSZ Techos — Dev Mode', 'color: #E31B23; font-weight: bold; font-size: 14px;');
});
