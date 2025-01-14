import React from 'react';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.css';
import { Skills } from './components/Skills.js';
import {Projects} from './components/Projects.js';
import {Contact} from './components/Contact.js';
import { Newsletter } from './components/Newsletter.js';
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
