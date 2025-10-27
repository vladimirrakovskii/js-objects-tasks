// BEGIN
export default (name, additionalProperties = {}) => {
    const defaultProperties = {
        state: 'moderating',
        createdAt: Date.now()
    };
    return {name, ...defaultProperties, ...additionalProperties};
}
// END
