// import React from 'react';
// import { Link } from 'react-router-dom'

// export default function IndividualOrdinance(props) {
// 	// console.log(props.location);
// 	// const { ordinance } = props.match.params;
//   return (
//     <li> 
// 		<h2>{props.ordinance.file} <small>- {props.ordinance.type}</small></h2>
// 		<p>Status: {props.ordinance.status}</p>
// 		<p>Introduced: {props.ordinance.dateIntroduced}</p>
// 		<p>Last Modified: {props.ordinance.dateLastModified}</p>
// 		<p>{props.ordinance.description}</p>
//     </li>  
//   );
// }

// this.props.match.params.id
// this.props.location
// this.props.match.id


import React from 'react';
import Ordinance from './Ordinance';
import axios from 'axios';

export default class IndividualOrdinance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      individualord: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4444/individualordinance').then((response) => {
      this.setState({ individualord: response.data });
    });
  }

   render() {
   	const { individualord } = this.props.match.id;
    return (
    <li> 
 		<h2>{individualord.file} <small>- {individualord.type}</small></h2>
 		<p>Status: {individualord.status}</p>
 		<p>Introduced: {individualord.dateIntroduced}</p>
 		<p>Last Modified: {individualord.dateLastModified}</p>
 		<p>{individualord.description}</p>
	</li>  
    );
  }
}