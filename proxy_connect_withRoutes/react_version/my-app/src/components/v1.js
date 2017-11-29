export default function Ordinance(props) {
  return (
    <li>
      <h2><Link to={ pathname:'/ordinance', id: { props.ordinance.file }}>{props.ordinance.file} <small>- {props.ordinance.type}</small></Link></h2>
      <p>Status: {props.ordinance.status}</p>
      <p>Introduced: {props.ordinance.dateIntroduced}</p>
      <p>Last Modified: {props.ordinance.dateLastModified}</p>
      <p>{props.ordinance.description}</p>
    </li>  
  );
}

