import React, { Component } from 'react';
import axios from 'axios'
import List from './components/List'
import SearchBar from './components/SearchBar'
import styles from './styles/main.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      store: []
    }
  }

  

  // componentDidMount(){
  //   axios.get('https://api.myjson.com/bins/hraj4')
  //   .then(json => json.data.map(result => (
  //     {
  //       name: `${result.name}`,       
  //       avatar: `${result.photo}`,
  //       email: `${result.email}`, 
  //     })))
  //   .then(newData => this.setState({users: newData, store: newData}))
  //   .catch(error => alert(error))
  // }

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=10')
    .then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,       
        avatar: `${result.picture.large}`,
        email: `${result.email}`, 
      })))
    .then(newData => this.setState({users: newData, store: newData}))
    .catch(error => alert(error))
  }

  filterNames(e){
    this.setState({users: this.state.store.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()))})
  }

  render() {
    const {users} = this.state
    return (
      <div className={styles['Card']}>
        <div className={styles['header']}>NAME LIST</div>
        <SearchBar searchFunc={(e) => this.filterNames(e)}/>
        <List usernames={users}/>
      </div>
    );
  }
}

export default App;