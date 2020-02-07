import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: process.env.NODE_ENV === 'development',
	state,
	mutations,
	actions
});

export default store;
