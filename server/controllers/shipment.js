const Parcel = require('./parcel')
const Address = require('./address')
const typeCheck = require('./typeCheck');

const shpTypes = {
    to_address: 'object',
    from_address: 'object',
    parcel: 'object',
    customs_info: 'object',
    carrier_accounts: 'array',
    reference: 'string',
    options: 'object'
};

const Shipment = (specs) => {
    typeCheck(specs, shpTypes); // validate that values are correct data types, throw error otherwise and do not continue with creating shipment.

    let shipment = {};

    shipment.reference = specs.reference ? specs.reference : '';
    shipment.to_address = specs.to_address ? specs.to_address : {};
    shipment.from_address = specs.from_address ? specs.from_address : {};
    shipment.parcel = specs.parcel ? specs.parcel : {};
    shipment.customs_info = specs.customs_info ? specs.customs_info : {};
    shipment.carrier_accounts = specs.carrier_accounts ? specs.carrier_accounts : [];
    shipment.options = specs.options ? specs.options : {};

    return shipment;
}

module.exports = Shipment;