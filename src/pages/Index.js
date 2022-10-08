import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Hello, welcome to my website!</Link>
          </h2>
          {/* <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p> */}
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more <Link to="/about">about me</Link>, or you
        can check out my <Link to="/resume">resume</Link>,{' '}
        {/* <Link to="/projects">projects</Link>, view{' '} */}
        <Link to="/stats">my favorite things</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
