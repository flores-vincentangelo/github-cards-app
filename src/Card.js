import React from 'react';
import './styles/Card.css'

export default class Card extends React.Component{

    render () {
        const profile = this.props;
        return (
            <div className='github-profile' key={this.props.id}>
                <img src={profile.avatar_url} alt="placeholder"/>
                <div className='info'>
                    <div className='name'>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}
