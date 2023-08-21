import React from 'react';

function AffichageTableau({props} : { props : Array }) {
  console.log('props tableau ' , props)
    return (
      <ul key={props[0]}>
        {props.map((equipment) => {
          return (
          <li key={equipment}>{equipment}</li>
          );
        })}
    </ul>
  );
};

export default AffichageTableau;