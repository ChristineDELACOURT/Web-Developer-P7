import React from 'react';
import styled from 'styled-components'

const Stars = styled.div`
width:100%;
height:52px;
`

function Rating({props} : { props : number }) {
    const notes = [1, 2, 3, 4, 5];
    console.log('notes : ' , notes);
    return (
      <Stars>
        {notes.map((note) =>
          props >= note ? (
            <i key={note.toString()} className="fa-solid fa-star" style={{color:'#ff6060'}}></i>
          ) : (
            <i key={note.toString()} className="fa-solid fa-star" style={{color:'#e3e3e3'}}></i>
          )
        )}
      </Stars>
    );
}

export default Rating;