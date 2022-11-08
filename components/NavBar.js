import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/navicon2.png';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Navbar.Brand href="/">
        <img src={logo} alt="Logo" height="80px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link
            href="#home"
            className={
              activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('home')}
          >
            <p className="homeman">Home</p>
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('skills')}
          >
            <p>Skills</p>
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={
              activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
            }
            onClick={() => onUpdateActiveLink('projects')}
          >
            <p>Projetos</p>
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/vinicius-borba-queiroz-a65091236/">
              <img src={navIcon1} alt="" />
            </a>
            <a href="https://github.com/viniciusbq">
              <img src={navIcon2} alt="" />
            </a>
            <a href="https://www.instagram.com/viniciusborbaqueiroz">
              <img src={navIcon3} alt="" />
            </a>
          </div>

          <button className="vvd">
            <span>Conecte-se</span>
          </button>
        </span>
      </Navbar.Collapse>
    </Navbar>
  );
};
