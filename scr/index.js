import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DonationPage from './scgt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DonationPage />);
html, body {
  font-family: 'Tajawal', sans-serif;
  margin: 0;
  padding: 0;
  background: #F9F5EE;
  color: #5C5346;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: auto;
}

.nav-bar-alt {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 0;
}

.left-links {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.left-links a {
  margin-right: 15px;
  font-weight: bold;
  color: #5C5346;
  text-decoration: none;
}

.left-links a:hover {
  color: #01796F;
}

.logo-centered {
  height: 60px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

h1, h2 {
  font-family: 'Scheherazade New', serif;
  text-align: center;
  color: #01796F;
}

h1 span, h2 span {
  color: #DAA520;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
}

.hero {
  background-color: #EFE6D8;
  padding: 60px 0;
}

.two-column {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.hero-text, .hero-image {
  flex: 1 1 45%;
  min-width: 300px;
  padding: 10px;
}

.hero-image img {
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.btn {
  background: #f4c542;
  color: #1a2a6c;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin: 5px;
  display: inline-block;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}

.btn:hover {
  background: #d1a537;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

footer {
  background: #E3D0B2;
  padding: 20px;
  text-align: center;
  font-size: 14px;
}

footer a {
  color: #01796F;
  text-decoration: none;
}
@media (max-width: 768px) {
  .two-column {
    flex-direction: column;
  }

  .hero-text,
  .hero-image {
    width: 100%;
  }

  .btn {
    width: auto;
    max-width: 100%;
  }

  h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .btn {
    width: auto;
    max-width: 100%;
  }
}
