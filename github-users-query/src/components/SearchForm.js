import React from 'react';
import UserCardList from './UserCardList';


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            users: []
        }
    }

    handleUsernameChanged(event) {
        var username = this.state.username;
        username = event.target.value;
    
        this.setState({ username: username });
    }

    render(){

        return(
            <div>
                <h1>Search for Github User</h1>
                <input type="text" onChange={this.handleUsernameChanged.bind(this)}></input>
                <button onClick={this._handleClick}>Submit</button>
                <div>
                    <UserCardList users={this.state.users}/>
                </div>
            </div>

        );
    }

    _handleClick = () => {
        console.log(this.state.username);
        const url = "https://api.github.com/users/" + this.state.username;
        fetch(url)
            .then(response => response.json())
            .then(user => {
                this.setState({
                    username: '',
                    users: [...this.state.users, user]
                }, () => {
                    console.log(this.state.users);
                    console.log(this.state.username);
                })
            })

    }
}

export default SearchForm;