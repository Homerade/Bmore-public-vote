import React from 'react';
import Ordinance from './Ordinance';
import axios from 'axios';

export default class OrdinanceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordinances: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4444/ordinances').then((response) => {
      this.setState({ ordinances: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1>Ordinance List</h1>
        <ul>
          {this.state.ordinances.map((o) => <Ordinance ordinance={o} key={o.id} />)}
        </ul>
      </div>
    );
  }
}