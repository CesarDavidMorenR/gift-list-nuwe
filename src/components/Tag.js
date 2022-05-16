import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';


export const Tag = ({ props, backgroundColor }) => {
  return (
    <p className='tag' style={backgroundColor}>
      {props.innertext}
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