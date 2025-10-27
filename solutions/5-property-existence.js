import _ from 'lodash';

// BEGIN
export default (data) => {
    if (data === "")
        return {};
    const obj = {};
    const parts = data.split(' ');
    for (let item of parts) {
        item = item.toLowerCase();
        if (Object.hasOwn(obj, item))
            obj[item] += 1;
        else
            obj[item] = 1;
    }
    return obj;
}
// END
