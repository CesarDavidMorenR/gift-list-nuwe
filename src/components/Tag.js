import React from 'react';
// import '../src/App.css';
import PropTypes from 'prop-types';


export const Tag = (props) => {
  return (
    <p className='tag'>
      {props.innertext}
    </p>

  )
}

Tag.propTypes = {
  innertext: PropTypes.string,
}

export default Tag /* This is for storybook */