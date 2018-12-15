import React from 'react';
import ReactDOM from 'react-dom';
import MostVotes from './MostVotes'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      selected: 0,
      votes: [0,0,0,0,0,0],
      anecdote: '',
      most: 0
    }
  }

 //####################################################################################[METHOD]
  seuraava = (draw) => {//get the next anecdote, set to randomint in passed through draw
        this.setState({
       selected: draw
      })
      console.log('VOTES(seuraava)', this.state.votes)
      console.log('SELECTED(seuraava)', this.state.selected)      
  }//seuraava

 //###################################################################################[RENDER]
  render() {

    console.log('VOTES(render)', this.state.votes)
    console.log('SELECTED(render)', this.state.selected) 

    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }//getRandomInt

    const vote = (selected) => {
      console.log('SELECTED(vote)', selected)
      const votes = this.state.votes
      console.log('VOTES(vote)', votes)
      const kopio = [...votes]
      kopio[selected] += 1
      console.log('KOPIO____', kopio)
      this.setState({
        votes: kopio
      })
          const indexOfMaxValue = kopio.indexOf(Math.max(...kopio))
          //sorted.reverse()
          console.log('=========VOTES', kopio)
          console.log('=========MAX', indexOfMaxValue)
          const kopio2 = [...kopio]
          const sorted = kopio2.sort()
          sorted.reverse()
          console.log('=======VOTES_SORTED', sorted)
          console.log('=======VOTES_SORTED[0]', sorted[0])
          this.setState({
            most: sorted[0],
            anecdote: this.props.anecdotes[indexOfMaxValue]
          })
    }//vote

   //#######################################################################################[RETURN]    

    return (
      <div>
        {this.props.anecdotes[this.state.selected]} <br/>
        <button onClick={() => this.seuraava(getRandomInt(6))}>next anecdote</button>
        <button onClick={() => {vote(this.state.selected)}}>vote</button>
        <p>has {this.state.votes[this.state.selected]} votes</p>
        <MostVotes mostVotes={this.state.most} mostVotesAnecdote={this.state.anecdote} />
      </div>


    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)



