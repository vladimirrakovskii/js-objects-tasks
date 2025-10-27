// BEGIN
export default (obj, keys) => {
    let newObj = obj;
    for (const item of keys) {
        if (!(Object.hasOwn(newObj, item)))
            return null;
        newObj = newObj[item];
    }
    return newObj;
}
// END
