// BEGIN
export default (obj, keys) => {
    const res = {};
    for (const item of keys)
        if (Object.hasOwn(obj, item))
            res[item] = obj[item];
    return res;
}
// END
