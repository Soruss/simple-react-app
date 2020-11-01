import './App.css';
import React, {Component} from 'react';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    person: null,
    numResult: 5
  };
}

async getData() {
  const url = `https://randomuser.me/api/?results=${this.state.numResult}`
  const response = await fetch(url);
  const data = await response.json();
  this.setState({person: data.results});
  console.log(this.state.person);
}

componentDidMount() {
  this.getData();
}


changeResult = (val) => {
  // eslint-disable-next-line
  this.state.numResult = val;
  this.getData();
}
  render() {
    return (    
    <div className="App">
      <header className="App-header">
      <div className="btn-group">
        <button type='button' onClick={() => this.changeResult(5)}>5 results</button>
        <button type='button' onClick={() => this.changeResult(10)}>10 results</button>
        <button type='button' onClick={() => this.changeResult(20)}>20 results</button>
      </div>
        {!this.state.person ? (<p>loading....</p>) : 
        (
          <table>
          <tbody>
          <tr>
            <th>Number</th>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
          {this.state.person.map( (person, index) => 
              (
              <tr key={person.login.uuid}>
                <td>{index + 1}</td>
                <td>{person.login.username}</td>
                <td>{person.email}</td>
                <td>{person.gender}</td>
              </tr>
              )
            )
          }
          </tbody>
        </table>
        )
      }
      </header>
    </div>
    );
  }
}

export default App;
