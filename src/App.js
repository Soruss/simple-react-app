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
  // console.log(this.state.person);
}

componentDidMount() {
  this.getData();
}

changeResult = (val) => {
  // eslint-disable-next-line
  this.state.numResult = val;
  this.getData();
}

onChangeHandler = (event) => {
  this.setState({numResult: event.target.value});
  // console.log(this.state.numResult)
}

submitHandler = (event) => {
  event.preventDefault();
  this.getData();
}

  render() {
    return (    
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Generate Random Username & Password</h3>
          <h5>via randomuser.me/api</h5>
        </div>
        
      <form onSubmit={this.submitHandler}>
        <input type="text" size="4" value={this.state.numResult} onChange={this.onChangeHandler}></input>
        <input type="submit" value="Change Result"></input>
      </form>
      <div className="btn-group">
        <button type='button' onClick={() => this.changeResult(5)}>5 results</button>
        <button type='button' onClick={() => this.changeResult(10)}>10 results</button>
        <button type='button' onClick={() => this.changeResult(20)}>20 results</button>
      </div>
      <div style={{height:"500px",overflow: "auto", border: "5px"}}>
        {!this.state.person ? (<p>loading....</p>) : 
        (
          <table>
          <tbody>
          <tr>
            <th>Number</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {this.state.person.map( (person, index) => 
              (
              <tr key={person.login.uuid}>
                <td>{index + 1}</td>
                <td>{person.login.username}</td>
                <td>{person.email}</td>
                <td>{person.login.password}</td>
              </tr>
              )
            )
          }
          </tbody>
        </table>
        )
      }
      </div>
      </header>
    </div>
    );
  }
}

export default App;
