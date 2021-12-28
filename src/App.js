import { Component } from 'react'
import './App.css'

import tasks from './sample/task.json'
import Tasks from './components/tasks'
import TaskForm from './components/taskForm'

class App extends Component {
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
     const newTask = {
       title: title,
       description: description,
       id: this.state.tasks.length
     }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  

  render() {
    return <div>
      <TaskForm addTask={this.addTask}/>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}


export default App
