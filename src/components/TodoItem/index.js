// Write your code here
import './index.css'

const TodoItems = props => {
  const {todoitem, onButtonClick} = props
  const {title, id} = todoitem

  const onDeleteclicked = () => {
    onButtonClick(id)
  }

  return (
    <li className="listitem">
      <div className="item">
        <p>{title}</p>
        <button type="submit" onClick={onDeleteclicked}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItems
