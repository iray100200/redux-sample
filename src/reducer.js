export default function counter(state = {
    counter: 0
}, action) {
    switch (action.type) {
        case 'INCRE': 
            return { counter: ++state.counter }
    }
    return state;
}