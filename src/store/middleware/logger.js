const logger = (store) => (next) => (action) => {
    console.log('ACTION', action);
    console.log('PREV_STATE', store.getState());
    const result = next(action);
    console.log('NEW_STATE', store.getState());
    return result;
}

export default logger;