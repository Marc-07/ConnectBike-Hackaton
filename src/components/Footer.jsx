import React from 'react';
import '../styles/Footer.css'; 


const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Sobre Nosotros</h2>
          <p>&copy; 2024 DIGIBOOTCAMP. Todos los derechos reservados.</p>
        </div>
        <div className="footer-section">
          <h2>Enlaces Rápidos</h2>
          <ul className="footer-links">
            <li><a href="#" aria-label="Política de Privacidad">Política de Privacidad</a></li>
            <li><a href="#" aria-label="Términos de Servicio">Términos de Servicio</a></li>
            <li><a href="#ñ" aria-label="Contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Redes Sociales</h2>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;