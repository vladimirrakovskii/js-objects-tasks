import _ from 'lodash';

// BEGIN
export default (objFirst, keys, objSecond) => {
    if (keys.length === 0)
        Object.assign(objFirst, objSecond);
    else
        Object.assign(objFirst, _.pick(objSecond, keys));
    return objFirst;
}
// END
