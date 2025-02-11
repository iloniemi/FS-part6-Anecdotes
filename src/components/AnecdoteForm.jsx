import { createAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    dispatch(createAnecdote(content))
    dispatch(setNotification(`created anecdote '${content}'`, 5))
    event.target.anecdoteInput.value = ''
  }

  return <>
    <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdoteInput' /></div>
        <button type='submit'>create</button>
      </form>
  </>
}

export default AnecdoteForm