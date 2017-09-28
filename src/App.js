import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile';
import Judging from './Judging';
import { Row, Col, Button } from 'react-materialize';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player1: {},
      player2: {}
    }
  }

  lookupPlayer(player_number) {
    console.log(player_number)

    var username;

    if (player_number == 1) {
      username = this.player1Input.value
    } else {
      username = this.player1Input.value
    }

    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        if (player_number == 1) {
          this.setState({ player1: response })
        } else {
          this.setState({ player2: response})
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }

  render() {
    return (
      <div>
        <h1>GitWars</h1>
        <Judging
          player1={this.state.player1}
          player2={this.state.player2}
        />
        <Row>
          <Col s={12} m={6}>
            <input ref={(input) => {this.player1Input = input; }}/>
            <Button waves='light' onClick={() => this.lookupPlayer(1)}>Lookup</Button>
            <PlayerProfile player_data={this.state.player1}/>
          </Col>
          <Col s={12} m={6}>
            <input ref={(input) => {this.player2Input = input; }}/>
            <Button waves='light' onClick={() => this.lookupPlayer(2)}>Lookup</Button>
            <PlayerProfile player_data={this.state.player2}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
