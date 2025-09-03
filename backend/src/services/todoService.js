let todos = [
	{ id: 1, title: 'Aprendendo Node.js', completed: false },
	{ id: 2, title: 'Aprendendo React.js', completed: true },
];

export const getAllTodos = () => {
	return todos;
};

export const getTodoById = (id) => {
	return todos.find((todo) => todo.id === Number(id));
};

export const createTodo = (data) => {
	const newTodo = {
		id: todos.length + 1,
		title: data.title,
		completed: data.completed || false,
	};
	todos.push(newTodo);
	return newTodo;
};

export const updateTodo = (id, data) => {
	const index = todos.findIndex((todo) => todo.id === Number(id));
	if (index !== -1) {
		todos[index] = { ...todos[index], ...data };
		return todos[index];
	}
	return null;
};

export const deleteTodo = (id) => {
	const index = todos.findIndex((todo) => todo.id === Number(id));
	if (index !== -1) {
		const deleted = todos.splice(index, 1);
		return deleted[0];
	}
	return null;
};
