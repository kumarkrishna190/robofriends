import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Scroll from './scroll';
import Searchbox from './Searchbox';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robot: [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
        .then(users => this.setState({robot : users}));
    }
    onSearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
render() {
    const filterrobot = this.state.robot.filter(robot =>{
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    if (!this.state.robot) {
        return <h1> Loading... </h1>
    } else {
        
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchchange}/>
        <Scroll>
            <Cardlist robot={ filterrobot } />
        </Scroll>
        </div>
    );
    }
}
}

export default App;