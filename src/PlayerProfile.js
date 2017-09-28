import React, { Component } from 'react';
import { Row, Col, CardPanel } from 'react-materialize';
//const urlforUsername = username => `https://api.github.com/users/${username}`

class PlayerProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
			<CardPanel className="blue lighten-4 black-text">
					<span>{this.props.player_data.name}</span>
          <img src={this.props.player_data.avatar_url} width="100%" />
          <h4>User Stats</h4>
          <div className="followers">Followers: {this.props.player_data.followers}</div>
          <div className="following">Following: {this.props.player_data.following}</div>
          <hr />
          <div>Bio: {this.props.player_data.bio}</div>
			</CardPanel>

    )
  }
}

export default PlayerProfile;
