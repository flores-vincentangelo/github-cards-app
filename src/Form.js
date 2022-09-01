import React from 'react';
// import fetch from 'node-fetch';

export default class Form extends React.Component {
    state = {userName: ''};
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await 
            fetch(`https://api.github.com/users/${this.state.userName}`)
            .then(body => body.json())

        this.props.onSubmit(response);
        this.setState({userName: ''})

    };
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder='GitHub username' 
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    required
                />
                <button>Add card</button>
            </form>
        );
    }
}