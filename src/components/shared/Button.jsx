import { useContext } from 'react'
import InteractiveContext from '../../context/InteractiveContext'

function Button() {
  const { handleClick } = useContext(InteractiveContext)
  return (
    <div>
      <button onClick={handleClick} type="submit" className="btn">
        Submit
      </button>
    </div>
  )
}

export default Button
