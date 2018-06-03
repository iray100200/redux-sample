const increment = (a, b)=> {
    return {
        type: 'INCRE',
        date: { a: 1 }
    }
};
const decrement = ()=> {
    return {type: 'DECRE'}
};

export const actions = {
    increment, decrement
}