import { sendVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import AnecdoteFilter from './AnecdoteFilter'
import { setNotification} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filterText = useSelector(state => state.filter.toLowerCase())
  const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filterText))
  const sortedAnecdotes = filteredAnecdotes.sort((a, b) => b.votes - a.votes)

  const handleVoteClick = (anecdote) => () => {
    dispatch(sendVote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return <div>
    <h2>Anecdotes</h2>
      <AnecdoteFilter />
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleVoteClick(anecdote)}>vote</button>
          </div>
        </div>
      )}
  </div>
}

export default AnecdoteList