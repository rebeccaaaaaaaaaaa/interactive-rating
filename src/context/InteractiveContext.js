import { createContext, useState } from 'react'

const InteractiveContext = createContext({})

export const InteractiveProvider = ({ children }) => {
  const [submitted, setSubmitted] = useState(false)
  const [ratingScore, setRatingScore] = useState(null)

  const handleClick = (e) => {
    if (ratingScore) {
      console.log(`submitted  ratingScore: ${ratingScore}`)
      setSubmitted(true)
    }
    e.preventDefault()
  }

  const handleClickRating = (e) => {
    setRatingScore(e.target.innerText)
    console.log(e.target.innerText)
    e.preventDefault()
  }

  return (
    <InteractiveContext.Provider
      value={{
        ratingScore,
        setRatingScore,
        submitted,
        handleClick,
        handleClickRating,
      }}
    >
      {children}
    </InteractiveContext.Provider>
  )
}

export default InteractiveContext
