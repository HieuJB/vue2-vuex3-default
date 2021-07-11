import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './modules/auth'

const storeData = {
	modules: {
		auth
	}
}

const store = new Vuex.Store(storeData)

export default store