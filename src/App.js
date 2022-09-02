import React from 'react';
import CardList from './CardList.js';
import Form from './Form.js';
import './styles/App.css';

export default class App extends React.Component {

    constructor(props) {
      super(props);
      //state initialization on class component
      this.state = {
        profiles: [],
      };

      this.addNewProfile2 = this.addNewProfile2.bind(this);
    }

    addNewProfile = (profileData) => {
      this.setState(prevState => ({
        profiles: [...prevState.profiles, profileData],
      }));
    }

    addNewProfile2(profileData) {
      this.setState(prevState => ({
        profiles: [...prevState.profiles, profileData],
      }));
    }
    //  this does not work. must "bind" first

    render () {
      return (
        <>
            <div className='header'>{this.props.title}</div>
            <Form onSubmit={this.addNewProfile2}/>
            <CardList profiles={this.state.profiles}/>
        </>
      );
    }
}

// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];
