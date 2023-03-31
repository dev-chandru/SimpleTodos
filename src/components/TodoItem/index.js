// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemsDetails, onDeleteTodo} = props

  const {id, title} = todoItemsDetails

  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
