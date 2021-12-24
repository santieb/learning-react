import { Component } from 'react'
import './App.css'

import tasks from './sample/task.json'
import Tasks from './components/tasks'

class App extends Component {
  
  state = {
    tasks: tasks
  }

  render() {
    return <div>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}


export default App
