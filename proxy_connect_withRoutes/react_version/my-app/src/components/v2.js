import React from 'react';
import { Link } from 'react-router-dom'

export default class IndividualOrdinance extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	      ordinanceItems: []
	    };
	}	

	componentDidMount() {
	    axios.get('http://localhost:4444/ordinances').then((response) => {
	      this.setState({ ordinanceItems: response.data });
	    });
	}

	render() {		
	  return (
	    <li>
	      <h2>{ordinanceItems.file} <small>- {ordinanceItems.type}</small></Link></h2>
	      <p>Status: {ordinanceItems.status}</p>
	      <p>Introduced: {ordinanceItems.dateIntroduced}</p>
	      <p>Last Modified: {ordinanceItems.dateLastModified}</p>
	      <p>{ordinanceItems.description}</p>
	    </li>  
	  );
	 }
	}



// route will have: /singleord/:id
// in OrdList each link will go to: /singleord/${ordinance.id}
// find out where to put: this.props.match.id
// check express docs for how to access route params in express (to pass the specific ord to be looked up)
// write the individual ord proxy 