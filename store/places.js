
export const state = () => ({
    data: [],
    details: []
})

export const mutations = {
    SET_DATA: (state, payload) => {
        state.data = payload
    },
    SET_DETAILS: (state, payload) => {
        state.details = payload
    }
}


// // export {
// //     state, mutation
// // }

// const titles = () => {
//     return new Vuex.Store({
//         state: {
//             titles: []
//         },
//         mutations: {
//             SET_TITLES: (state, payload) => {
//                 state.titles = payload
//             }
//         }
//     })
// }

// export default titles