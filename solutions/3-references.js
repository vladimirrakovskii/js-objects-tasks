// BEGIN
export default (companyFirst, companySecond) => {
    if ((companyFirst.name === companySecond.name) 
        && (companyFirst.state === companySecond.state) 
        && (companyFirst.website === companySecond.website))
        return true;
    return false;
}
// END
