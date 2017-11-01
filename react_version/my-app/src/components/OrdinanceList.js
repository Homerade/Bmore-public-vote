import React from 'react';
import Ordinance from './Ordinance';

const ordinances = [
  { referenceNumber: 1, name: 'Ordinance 1', description: 'stuff' },
  { referenceNumber: 2, name: 'Ordinance 2', description: 'more stuff' }
];

export default function OrdinanceList() {
  return (
    <div>
      <h1>Ordinance List</h1>
      <ul>
        {ordinances.map((o) => <Ordinance ordinance={o} key={o.referenceNumber} />)}
      </ul>
    </div>
  )
}