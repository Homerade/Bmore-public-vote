import React from 'react';

export default function Ordinance(props) {
  return (
    <li>
      <h2>{props.ordinance.name}</h2>
      <p>{props.ordinance.description}</p>
    </li>  
  );
}