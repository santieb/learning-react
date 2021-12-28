import React from 'react'
import Task from './task'
import propTypes from 'prop-types'

class Tasks extends React.Component {
    render() {
        return this.props.tasks.map(task =>
            <Task
                task={task}
                key={task.id}
                deleteTask={this.props.deleteTask}
                checkDone={this.props.checkDone}
            />)
    }
}

Tasks.propTypes = {
    tasks: propTypes.array.isRequired
}
 
export default Tasks