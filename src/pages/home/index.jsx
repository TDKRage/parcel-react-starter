import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import { page2 } from '/app/urls';
import './styles.scss';

const Home = ({ history: { push } }) => (
  <div className="home">
    <h1>Home</h1>
    <p>I know words. I have the best words.</p>
    <p>
      I’m the best thing that ever happened to placeholder text. Despite the
      constant negative ipsum covfefe.
    </p>
    <p>
      You know, it really doesn’t matter what you write as long as you’ve got a
      young, and beautiful, piece of text. We have so many things that we have
      to do better... and certainly ipsum is one of them.
    </p>
    <p>
      Look at that text! Would anyone use that? Can you imagine that, the text
      of your next webpage?! This placeholder text is gonna be HUGE. I think the
      only difference between me and the other placeholder text is that I’m more
      honest and my words are more beautiful. We are going to make placeholder
      text great again. Greater than ever before.
    </p>
    <Button onClick={() => push(page2())} raised>
      NEXT PAGE
    </Button>
  </div>
);

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
