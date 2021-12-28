import react from 'react'

class TaskForm extends react.Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        const { title, description } = this.state
        event.preventDefault()
        this.props.addTask(title, description)
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="title"
                    type="text"
                    placeholder="write a task"
                    onChange={this.onChange}
                    value={this.state.tittle} />
                <br/> <br/>
                <textarea
                    name="description"
                    placeholder='write a description'
                    onChange={this.onChange}
                    value={this.state.description} />
                <input type="submit" />
            </form>
        )
    }
}

export default TaskForm