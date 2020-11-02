import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import './App.css';



class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 2
    }
    this.btnClicked = this.btnClicked.bind(this)
  }
  btnClicked() {
    console.log(this.state.options);
  }
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>React App</h1>
      {/* <div className="btn-group">
        {console.log("before")}
        <button onClick={this.btnClicked()}>Generate Username/Password</button>
        <button onClick={this.btnClicked()}>Generate Random Profile</button>
      </div> */}
      {/* {this.options === 1 ? (<App2 />) : (<App />)} */}
      <App />

      </header>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
