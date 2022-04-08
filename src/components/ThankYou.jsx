import { useContext } from 'react'
import Card from './shared/Card'
import thankimage from '../images/illustration-thank-you.svg'
import InteractiveContext from '../context/InteractiveContext'

function ThankYou() {
  const { ratingScore, submitted } = useContext(InteractiveContext)
  return (
    <div className={submitted ? 'block' : 'hidden'}>
      <Card>
        <div className="img">
          <img src={thankimage} alt="thankImage" className="thankImage" />
        </div>
        <div className="selected">
          <p>You selected {ratingScore} out of 5 </p>
        </div>
        <div className="thank-con">
          <h3>Thank You!</h3>
        </div>
        <div className="getIntouch-text">
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
        </div>
      </Card>
    </div>
  )
}

export default ThankYou
