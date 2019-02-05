module.exports = typeCheck = (obj, objTypes) => {
    let passed = {};
    
    for (field in obj) {
        if (obj[field]) {
            if (typeof obj[field] === objTypes[field]) {
                passed[field] = obj[field];
            } else {
                throw `Expected ${field} to be a ${objTypes[field]}, got ${typeof obj[field]}`;
            }
        } else null
    }
    return passed
}