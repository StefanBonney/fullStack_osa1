import React from 'react'

const MostVotes = ({mostVotes, mostVotesAnecdote}) => {

    return(
        <div>
            <h1>anecdote with most votes</h1>
            <p>{mostVotesAnecdote} </p>
            <p>has {mostVotes} votes</p>
        </div>
    )
}

export default MostVotes