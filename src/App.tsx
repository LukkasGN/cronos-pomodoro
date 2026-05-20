import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

function App() {
  console.log('Hello world');
  return (
    <div>
      <Heading />
      <div>
        <p>Welcome to Chronos Pomodoro, your ultimate productivity companion! This app is designed to help you manage your time effectively using the Pomodoro Technique. With a simple and intuitive interface, you can easily set timers for focused work sessions and breaks. Stay productive and achieve your goals with Chronos Pomodoro!</p>
      </div>
    </div>
  )
}

export default App
