import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// class App extends React.Component {
//   const setup = this.props.ordinances.map((ordinance) =>
//     <div key={post.ReferenceNo}>
//       <h2>{post.Name}</h2>
//       <p>{post.Description}</p>
//     </div>  
//   );  
//     return ( 
//       <div>{setup}</div>
//     );
// }

function App(props) {
  const setup = props.ordinances.map((ordinance) =>
    <div key={post.ReferenceNo}>
      <h2>{post.Name}</h2>
      <p>{post.Description}</p>
    </div>  
  );  
    return ( 
      <div>{setup}</div>
    );
}


const ordinances = [
  {ReferenceNo: 1, Name: 'Ordinance 1', Description: 'stuff'},
  {ReferenceNo: 2, Name: 'Ordinance 2', Description: 'more stuff'}
];


ReactDOM.render(
  <App ordinances={ordinances} />, 
  document.getElementById('root')
);

// export default App;