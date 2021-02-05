import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      string: 'DERP',
      dates: [
        {
          date: "2/4/2021",
          notes: [
            "Derp"
          ]
        },
        {
          date: "2/5/2021",
          notes: [
            "11:00am - woke up",
            "5:00pm - Created React App for keeping track of daily notes."
          ]
        },

      ],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>{ this.state.string }</p>
          <button onClick={() => 
          {
            if("Daily Notes App" === this.state.string) {
              this.setState({ string: "DERP" });
            }
            else {
              this.setState({ string: "Daily Notes App" }); 
            }
          } 
            }>Change Text</button>

          {
            this.state.dates.map(dateObj => <h1> { dateObj.date } </h1>)
          }
         
          {
            <h1>DERP { () => 
              {
                var d = new Date();
                <p>"lol"</p>
              } 
            } </h1>
          }

        </header>
      </div>
    );
  }
}

export default App;
