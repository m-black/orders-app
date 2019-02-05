const typeCheck = require('./typeCheck');

const prclTypes = {
    length: 'number',
    width: 'number',
    height: 'number',
    weight: 'number',
    predefined_package: 'string',
}

const Parcel = (specs) => {
    typeCheck(specs, prclTypes); // validate that values are correct data types, throw error otherwise and do not continue with creating address.

    let parcel = {};

    parcel.length = specs.length ? specs.length : '';
    parcel.width = specs.width ? specs.width : '';
    parcel.height = specs.height ? specs.height : '';
    parcel.weight = specs.weight ? specs.weight : '';
    parcel.predefined_package = specs.predefined_package ? specs.predefined_package : '';

    return parcel;
}

module.exports = Parcel;