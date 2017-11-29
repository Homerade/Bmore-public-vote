import React from 'react';
import { Link } from 'react-router-dom'

export default function IndividualOrdinance(props) {
  return (
    <li>
      <h2>{props.ordinance.file} <small>- {props.ordinance.type}</small></h2>
      <p>Status: {props.ordinance.status}</p>
      <p>Introduced: {props.ordinance.dateIntroduced}</p>
      <p>Last Modified: {props.ordinance.dateLastModified}</p>
      <p>{props.ordinance.description}</p>
    </li>  
  );
}