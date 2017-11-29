import React from 'react';
import { Link } from 'react-router-dom'

export default function Ordinance(props) {
	const { ordinance } = props;
  return (
    <li>
      <h2><Link to={`/individualord/${ordinance.id}`}>{ordinance.file}</Link> <small>- {ordinance.type}</small></h2>
      <p>Status: {ordinance.status}</p>
      <p>Introduced: {ordinance.dateIntroduced}</p>
      <p>Last Modified: {ordinance.dateLastModified}</p>
      <p>{ordinance.description}</p>
    </li>  
  );
}
