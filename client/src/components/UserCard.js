import React from 'react';
import axios from 'axios';


class UserCard extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        players: []
      };
    }
  
    componentDidMount() {
      axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
      
    }
    render (){
        return (
            <div>
                {this.state.players.map(player =>{
                    return (
                        <div key={player.id}>
                            <h1>Name: {player.name}</h1>
                            <p>Country: {player.country}</p>
                            <p>Searches: {player.searches}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default UserCard;