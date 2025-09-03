import * as todoService from '../services/todoService.js';

export const getTodos = (req, res) => {
	try {
		const todos = todoService.getAllTodos();

		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ error: 'Erro ao buscar To-Dos' });
	}
};

export const getTodoById = (req, res) => {
	try {
		const id = Number(req.params.id);

		const getTodo = todoService.getTodoById(id);

		res.status(200).json(getTodo);
	} catch (error) {
		res.status(500).json({ error: `Erro ao buscar Todo de ID ${id}` });
	}
};

export const createTodo = (req, res) => {
	try {
		const data = req.body;

		const newTodo = todoService.createTodo(data);

		res.status(201).json(newTodo);
	} catch (error) {
		res.status(500).json({ error: 'Erro ao criar To-Do' });
	}
};

export const updateTodo = (req, res) => {
	try {
		const id = Number(req.params.id);

		const updateTodo = todoService.updateTodo(id, req.body);

		res.status(200).json({ message: `Todo ${id} atualizado com sucesso` });
	} catch (error) {
		res.status(500).json({ error: `Erro ao atualizar Todo de ID ${id}` });
	}
};

export const deleteTodo = (req, res) => {
	try {
		const id = Number(req.params.id);

		const deleteTodo = todoService.deleteTodo(id);

		res.status(200).json({ message: `Todo ${id} Deletado com sucesso` });
	} catch (error) {
		res.status(500).json({ error: `Erro ao Deletar Todo de ID ${id}` });
	}
};
