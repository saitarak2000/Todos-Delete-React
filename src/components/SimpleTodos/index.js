import {Component} from 'react'
import './index.css'
import TodoItems from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {changedid: 0, atfirstinitialTodosList: initialTodosList}

  onButtonClick = uniqueno => {
    console.log(`button clicked ${uniqueno}`)
    const {atfirstinitialTodosList} = this.state
    const filtered = atfirstinitialTodosList.filter(
      eachitem => eachitem.id !== uniqueno,
    )

    this.setState({atfirstinitialTodosList: filtered})
  }

  render() {
    const {changedid, atfirstinitialTodosList} = this.state
    const filteredTodos = atfirstinitialTodosList.filter(
      eachitem => eachitem.id !== changedid,
    )
    return (
      <div className="main-container">
        <div className="inside-container">
          <h1>Simple Todos</h1>
          <ul className="Todocontainerslist">
            {filteredTodos.map(eachitem => (
              <TodoItems
                onButtonClick={this.onButtonClick}
                todoitem={eachitem}
                key={eachitem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
