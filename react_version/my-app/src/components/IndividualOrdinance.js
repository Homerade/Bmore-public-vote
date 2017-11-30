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
import axios from 'axios';

export default class IndividualOrdinance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      individualord: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4444/ordinance/' + this.props.match.id)
    .then((response) => {
      console.log("then response");
      this.setState({ individualord: response.data });
    })
    .catch(function (error) {
      console.log("catch error");
    });
  }


  render() {
    return (
      <code><pre>{JSON.stringify(this.state.individualord, null, 2)}</pre></code>
   );
  }

// <h1>Hi!</h1>

  //  render() {
  //   const { individualord } = this.state.individualord
  //   return (
  //     <div>
  //       <h2>{this.state.individualord.MatterFile} <small>- {this.state.individualord.type}</small></h2>
  //       <p>Status: {this.state.individualord.status}</p>
  //       <p>Introduced: {this.state.individualord.dateIntroduced}</p>
  //       <p>Last Modified: {this.state.individualord.dateLastModified}</p>
  //       <p>{this.state.individualord.description}</p>
  //     </div>
  //   );
  // }
}