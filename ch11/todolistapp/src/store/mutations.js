import Constants from '../constants';

export default {
	[Constants.ADD_TODO]: (state, payload) => {
		if (payload.todo !== '') {
			state.todolist.push({ id: new Date().getTime(), todo: payload.todo, done: false });
		}
	},
	[Constants.DELETE_TODO]: (state, payload) => {
		var index = state.todolist.findIndex((item) => item.id === payload.id);
		state.todolist.splice(index, 1);
	},
	[Constants.DONE_TOGGLE]: (state, payload) => {
		var index = state.todolist.findIndex((item) => item.id === payload.id);
		state.todolist[index].done = !state.todolist[index].done;
	}
};
