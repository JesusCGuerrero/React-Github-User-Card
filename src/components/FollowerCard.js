import React from 'react';

class FollowersCard extends React.Component {
    constructor () {
        super()
        this.state = {
        }
    }

    

    render () {
        console.log(`Card: ${this.props.followers}`)

        return (
            
            <div className='userCard followerCard'>
                <h1>{this.props.followers.login}</h1>
                <div className="avatarBox">
                    <img src={this.props.followers.avatar_url} alt="User" className="avatar"/>
                </div>

                <div className="calendarFBox">
                    <img 
                    src={"http://ghchart.rshah.org/" + this.props.followers.login}
                    alt={this.props.followers.login + "'s Github chart"}
                    className="calendarF"
                    />
                </div>

            </div>
        )
    }
}

export default FollowersCard