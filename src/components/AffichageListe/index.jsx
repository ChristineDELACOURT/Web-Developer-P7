import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import colors from '../../utils/style/colors'

const TagStyle = styled.h3`
font-size: 14px;
line-height:20px;
border-radius:10px;
background-color:${colors.primary};
color: ${colors.secondary};
text-align:center;
padding: 5px 20px;
`

const TagContainer = styled.div`
width:100%;
gap:10px;
display:flex;
flex-direction:flex-start;
`

function AffichageListe({props} : { props : Array }) {
  console.log('props tableau ' , props)
  
    return (
      <TagContainer key={props[0]}>
        {props.map((tag,index) => {
          return (
            <TagStyle key={index}>{tag}</TagStyle>
          );
        })}
    </TagContainer>
  );
};




TagStyle.propTypes = {
  tag: PropTypes.string,
}

TagStyle.defaultProps = {
  title: '',
}

export default AffichageListe;