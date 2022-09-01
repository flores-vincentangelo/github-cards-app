import React from 'react';
import CardList from './CardList.js';
import './styles/App2.css';

export default class App2 extends React.Component {

    render () {
      return (
        <>
            <div className='header'>{this.props.title}</div>
            <CardList />
        </>
      );
    }
}