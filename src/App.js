import Question from './components/Question'
import ThankYou from './components/ThankYou'
import { InteractiveProvider } from './context/InteractiveContext'
import './App.css'

function App() {
  return (
    <InteractiveProvider>
      <div className="App">
        <Question />
        <ThankYou />
      </div>
    </InteractiveProvider>
  )
}

export default App
