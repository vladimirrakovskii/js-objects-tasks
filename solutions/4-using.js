// BEGIN
export default (name) => {
    if (name.startsWith('https://')) {
        return { scheme: 'https', name: name.replace('https://', '') };
    }
    return { scheme: 'http', name: name.replace('http://', '') };
};
// END
