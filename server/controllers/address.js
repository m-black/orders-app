const typeCheck = require('./typeCheck');

const addrTypes = {
    name: 'string',
    company: 'string',
    street1: 'string',
    street2: 'string',
    city: 'string',
    zip: 'string',
    state: 'string',
    country: 'string',
    phone: 'string',
    email: 'string',
    residential: 'boolean'
};

const Address = (specs) => {
    typeCheck(specs, addrTypes); // validate that values are correct data types, throw error otherwise and do not continue with creating address.

    let address = {};

    address.name = specs.name ? specs.name : '';
    address.company = specs.company ? specs.company : '';
    address.street1 = specs.street1 ? specs.street1 : '';
    address.street2 = specs.street2 ? specs.street2 : '';
    address.city = specs.city ? specs.city : '';
    address.state = specs.state ? specs.state : '';
    address.zip = specs.zip ? specs.zip : '';
    address.country = specs.country ? specs.country : '';
    address.phone = specs.phone ? specs.phone : '';
    address.email = specs.email ? specs.email : '';
    address.residential = specs.residential ? true : false;

    return address;
}

module.exports = Address;