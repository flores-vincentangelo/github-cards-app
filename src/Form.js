import React from 'react';

export default class Form extends React.Component {
    render () {
        return (
            <form>
                <input type="text" placeholder='GitHub username'/>
                <button>Add card</button>
            </form>
        );
    }
}