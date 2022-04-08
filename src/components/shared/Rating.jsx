import { useContext } from 'react'
import Circle from './Circle'
import InteractiveContext from '../../context/InteractiveContext'

const ratingNums = [1, 2, 3, 4, 5]
// const deafultStyle = 'bg-opacity-10 text-medium-grey'
// const activeStyle = 'text-white'

function Rating() {
  const { ratingScore, handleClickRating } = useContext(InteractiveContext)
  return (
    <div className="rating">
      {ratingNums.map((num) => {
        return (
          <Circle
            activeStyle={Number(ratingScore) === Number(num) ? true : false}
            key={`rating-source-${num}`}
          >
            <h1 className='rating-num' onClick={handleClickRating}>{num}</h1>
          </Circle>
        )
      })}
    </div>
  )
}

export default Rating
