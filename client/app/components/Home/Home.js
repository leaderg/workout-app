import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.newCounter = this.newCounter.bind(this);

  }

  newCounter() {
    fetch('/api/exercises')
    .then(res => res.json())
    .then((reply) => {
      this.setState({
        words: reply.words,
        loading: false
      })
    })
  }


  render() {
    if (!this.state.loading) {
      return (<p>{this.state.words}</p>)
    } else {
        return (
          <>
            <p>Counters:</p>>
            <button onClick={this.newCounter}>Summon the words</button>
          </>
        );
    }
  }
}

export default Home;
