import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(form.title, form.description);
    setForm({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="mb-2 p-2 border rounded w-full"
      />
      <button className="bg-green-500 text-white p-2 rounded">Add Todo</button>
    </form>
  );
};

export default AddTodo;
