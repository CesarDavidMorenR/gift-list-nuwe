import React from 'react';
// import '../src/App.css';
import PropTypes from 'prop-types';


export const Tag = (props) => {
  return (
    <p className='tag'>
      {props.innertext}dsfdsfdsfdsf
    </p>

  )
}

Tag.propTypes = {
  innertext: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

Tag.defaultProps = {
  innertext: 'AJGJAA',
  backgroundColor: 'blue',
  color: 'white',
}

export default Tag /* This is for storybook */