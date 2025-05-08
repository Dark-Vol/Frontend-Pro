let todos = [];
let currentId = 1;

exports.getTodos = (req, res) => {
  try {
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

exports.createTodo = (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const newTodo = { id: currentId++, title, completed: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

exports.updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = todos.find(t => t.id === parseInt(id));
    if (!todo) return res.status(404).json({ error: 'Todo not found' });

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update todo' });
  }
};

exports.deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    const exists = todos.some(t => t.id === parseInt(id));
    if (!exists) return res.status(404).json({ error: 'Todo not found' });

    todos = todos.filter(t => t.id !== parseInt(id));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};
