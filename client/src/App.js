import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends React.Component {
  state = {
    name: ''
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      this.setState({
        name: res
      });
    })
    .catch(err => console.log(err));
  }

  render () {
    console.log('App is rendering');
    return (
      <div className="App">
        <UserCard />
    </div>
    );
  }
}

export default App;
// name: "Tierna Davidson"
// country: "United States"
// searches: 1
// id: 100