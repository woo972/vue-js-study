import Constants from '../constants';

export default {
	[Constants.ADD_TODO]: (store, payload) => {
		setTimeout(() => {
			store.commit(Constants.ADD_TODO, payload);
		}, 1000);
	},
	[Constants.DELETE_TODO]: (store, payload) => {
		setTimeout(() => {
			store.commit(Constants.DELETE_TODO, payload);
		}, 1000);
	},
	[Constants.DONE_TOGGLE]: (store, payload) => {
		setTimeout(() => {
			store.commit(Constants.DONE_TOGGLE, payload);
		}, 1000);
	}
};
