import React from 'react';

class Card extends React.Component {
    constructor () {
        super()
        this.state = {
        }
    }

    

    render () {
        console.log(`Card: ${this.props.user}`)

        return (
            
            <div className='userCard'>
                <h1>{this.props.user.name}</h1>
                <div className="avatarBox">
                    <img src={this.props.user.avatar_url} alt="User" className="avatar"/>
                </div>
                <div className="calendarBox">
                    <img 
                    src="http://ghchart.rshah.org/jesuscguerrero" 
                    alt="jesuscguerreros's Github chart"
                    className="calendar"
                    />
                </div>
                <div className="data">
                    <p>Username: {this.props.user.login}</p>
                    <p>Location: {this.props.user.location}</p>
                    <p>Followers: {this.props.user.followers}</p>
                    <p>Following: {this.props.user.following}</p>
                    <a href={this.props.user.blog}>Website: {this.props.user.blog}</a>
                    <p>Bio: {this.props.user.bio}</p>
                    <p>Public Repos: {this.props.user.public_repos}</p>
                </div>
    
            </div>
        )
    }
}

export default Card