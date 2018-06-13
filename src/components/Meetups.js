import React, {Component} from 'react';
import axios from 'axios';
import Meetupitems from './Meetupitems';

class Meetups extends Component {
    constructor(){
        super();
        this.state = {
            meetups: []
        }

    }
    componentWillMount(){
        console.log(123)
        this.getUsers();
    }
    getUsers(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
            console.log(response.data)
            this.setState({ meetups: response.data}, ()=>{
                console.log(this.state)
            })
        })
    }
    render() {
        const meetupsItem = this.state.meetups.map( (meetup,i) => {
            return(
                <div>
                    <Meetupitems item={meetup}/>
                </div>
            )
        })
      return(
        <div>
          <h1>Meetup </h1>
            <ul className="collection">
                {meetupsItem}
            </ul>
        </div>
      )
    }
  }

  export default Meetups;