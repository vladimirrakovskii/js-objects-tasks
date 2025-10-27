// BEGIN
export default (obj) => {
    const newObj = {};
    for (const item in obj) {
        newObj[item] = obj[item];
    }
    return newObj;
}
// END
