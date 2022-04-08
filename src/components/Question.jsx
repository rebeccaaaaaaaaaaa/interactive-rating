import { useContext } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import Rating from './shared/Rating'
import star from '../images/icon-star.svg'
import InteractiveContext from '../context/InteractiveContext'

function Question() {
  const { submitted } = useContext(InteractiveContext)
  return (
    <div className={submitted ? 'hidden' : 'block'}>
      <Card>
        <img src={star} alt="starImage" className="star" />
        <h2>How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <Rating />
        <Button />
      </Card>
    </div>
  )
}

export default Question
