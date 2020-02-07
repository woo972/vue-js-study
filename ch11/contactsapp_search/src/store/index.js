import Vue from 'vue';
import vuex from 'vuex';
import Constants from '../constants';
import axios from 'axios';

Vue.use(vuex);

const store = new vuex.Store({
	state: {
		contacts: [],
		isLoading: false
	},
	mutations: {
		[Constants.SEARCH_CONTACT]: (state, payload) => {
			state.contacts = payload.contacts;
		},
		[Constants.CHANGE_ISLOADING]: (state, payload) => {
			state.isLoading = payload.isLoading;
		}
	},
	actions: {
		[Constants.SEARCH_CONTACT]: (store, payload) => {
			store.commit(Constants.CHANGE_ISLOADING, { isLoading: true });
			axios.get(Constants.BASE_URL + payload.name).then((res) => {
				store.commit(Constants.CHANGE_ISLOADING, { isLoading: false });
				store.commit(Constants.SEARCH_CONTACT, { contacts: res.data });
			});
		}
	}
});

export default store;
