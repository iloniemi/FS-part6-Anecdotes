import { setFilter } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const text = event.target.value
    dispatch(setFilter(text))
  }

  return (
    <div>
      filter<input name='filterInput' onChange={handleChange} />
    </div>
  )
}

export default AnecdoteFilter