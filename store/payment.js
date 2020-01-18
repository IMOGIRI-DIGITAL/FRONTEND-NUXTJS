import Vuex from "vuex";

export const state = () => ({
    data: [],
    details: [],
    payments: [],
    history: []
})

export const mutations = {
    SET_DATA: (state, payload) => {
        state.data = payload
    },
    SET_DETAIL: (state, payload) => {
        state.details = payload
    },
    SET_PAYMENTS: (state, payload) => {
        state.payments = payload
    },
    SET_HISTORY: (state, payload) => {
        state.history = payload
    }
}
