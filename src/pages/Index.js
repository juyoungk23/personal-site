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
      <p>
        {' '}
        If you would like to have one of these websites yourself, <a href="https://forms.gle/95ZH9hVZ6AsEJDEN6" target="_blank" rel="noreferrer">please fill out this Google Form</a>!
        The price is $15, and all proceeds to go Make-A-Wish.
        However, if you refer a friend to use this service, then I will refund you $5.
      </p>
      <p>
        You can also Pre-Order this service, so that you can
        get your website at a later date when your resume is more finalized.
        This $15 offer ends on October 20th.
        If you have any questions, please feel free to <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
