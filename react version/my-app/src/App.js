import React from 'react';
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
    (
    <div key={ordinance.ReferenceNo}>
      <h2>{ordinance.Name}</h2>
      <p>{ordinance.Description}</p>
    </div>  
    )
  );  
    return ( 
      <div><h1>Hi</h1>{setup}</div>
    );
}

export default App;
