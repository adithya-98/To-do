import React from 'react';

const TodoItem = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className="border p-4 mb-2 rounded flex justify-between items-center">
      <div>
        <h3 className={`text-xl ${todo.completed ? 'line-through' : ''}`}>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <div>
        <button
          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => editTodo(todo)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
