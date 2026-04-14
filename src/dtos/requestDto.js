'use strict';

const createRequestDto = (data) => {
  return {
    clientName: data.clientName,
    clientContact: data.clientContact,
    serviceId: data.serviceId,
    description: data.description,
  };
};

module.exports = {
  createRequestDto,
};