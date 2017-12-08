import React from 'react';
import axios from 'axios';

import OrdVote from './OrdVote';


export default class IndividualOrdinance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      individualord: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4444/ordinance/' + this.props.match.params.id)
    .then((response) => {
      this.setState({ individualord: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
       <div>

       <div>
        <h2>{this.state.individualord.MatterFile} <small>- {this.state.individualord.MatterTypeName}</small></h2>
        <p>Status: {this.state.individualord.MatterStatusName}</p>
        <p>Introduced: {this.state.individualord.MatterIntroDate}</p>
        <p>Last Modified: {this.state.individualord.MatterLastModifiedUtc}</p>
        <p>{this.state.individualord.MatterTitle}</p>
      </div>

      <OrdVote title={this.state.individualord.MatterFile} />

      </div>
   );
  }
}



// i think the next thing you'll want to do is go back to the proxy API and convert/pick keys for the single endpoint

// then you'll be ready to build a real template in react with your shiny new ordinance data

// later you should store the `error` on `this.state` somehow and then check for that error's existence in `render()`, and if it exists, display some kind of error message/banner instead of trying to display the ordinance



//// NEXT BIG THINGS

// weed out everything but ORDs
// style
// add voting system
