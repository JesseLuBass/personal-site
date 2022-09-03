import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Jesse Lu</h2>
        <p><a href="mailto:jesse.lu95@gmail.com">jesse.lu95@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I am Jesse. I like building things.
        I am a software engineer and data lead at <a href="https://inate.ai">inate.ai</a>.
        Before software engineering I was a double bassist for the <a href="https://www.vancouversymphony.ca">Vancouver Symphony Orchestra </a>
        and the <a href="https://mcduffie.mercer.edu/">McDuffie Center for Strings</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jesse Lu<Link to="/"> jesselu.ca</Link>.</p>
    </section>
  </section>
);

export default SideBar;
