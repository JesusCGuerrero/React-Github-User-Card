import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import FollowersCard from './components/FollowerCard'
import './App.css';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        axios.get(`http://api.github.com/users/JesusCGuerrero`)
        .then(response => {
            console.log(response.data)
            this.setState({
                user: response.data
            })
        })

        axios.get(`http://api.github.com/users/JesusCGuerrero/followers`)
        .then(response => {
            // console.log(`Followers:`, response.data)
            this.setState({
              followers: response.data
            })
        })
    }

    render() {
      console.log(`Followers:`, this.state.followers)
        return (
            <div className="myApp">
              <Card user={this.state.user}/>

              <h2>Followers:</h2>
              <div className="followers">
                {this.state.followers && this.state.followers.map((item) => {
                  return <FollowersCard followers={item}/>
                })}
              </div>
            </div>
        )
    }
}

export default App;
