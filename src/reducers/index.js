function defaultReducer(state, newState) {
    return {
        ...state,
        ...newState
    }
}

function reducer(state, newState) {
    let recipient = {};
    if (state) {
        for (const key in state) {
            recipient[key] = (newState[key] || newState[key] === "") ? newState[key] : state[key];
        }
        return { ...recipient };
    }
}

function reducerWithReset(state, newState) {
    if (newState?.state && newState?.type === 'reset') {
        return { ...newState.state };
    }
    return {
        ...state,
        ...newState
    };
};

export { reducer, defaultReducer, reducerWithReset };