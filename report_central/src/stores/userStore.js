import { createStore, action, persist } from 'easy-peasy'

// const getUserLocalStorage = () => {
//     const userStr = localStorage.getItem("USER")

//     if (userStr) {
//         return JSON.parse(userStr)
//     }

//     return false
// }

// export const userStore = createStore({
//     token: localStorage.getItem("ACCESS_TOKEN"),
//     user: getUserLocalStorage() || {
//         firstname: '',
//         employee_id: '',
//         role: 'guest',
//     },
//     setUser: action((state, user) => {
//         localStorage.setItem("USER", JSON.stringify(user))

//         state.user = user
//     }),
//     setToken: action((state, token) => {
//         // browser จำ refresh ไม่หาย
//         localStorage.setItem('ACCESS_TOKEN', token)

//         // set store
//         state.token = token
//     })
// });


export const userStore = createStore(
    persist({
        token: '',
        user: {
            firstname: '',
            employee_id: '',
            role: 'guest',
        },
        setUser: action((state, user) => {
            state.user = user
        }),
        setToken: action((state, token) => {
            state.token = token
        })
    }, {
        storage: 'localstorage'
    })
);