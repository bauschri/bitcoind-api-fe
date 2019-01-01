import request from 'utils/request';

import { getAuth0Profile } from 'features/auth';

function fetch() {
  const profile = getAuth0Profile();
  return request({
    url: `/backend-service/api/clients/${profile.getClientId()}/companies/${profile.getCompanyId()}/customers`,
    method: 'GET',
  });
}

function create(params) {
  const profile = getAuth0Profile();
  return request({
    url: `/backend-service/api/clients/${profile.getClientId()}/companies/${profile.getCompanyId()}/customers`,
    method: 'POST',
    data: params,
  });
}

function update(id, params) {
  const profile = getAuth0Profile();
  return request({
    url: `/backend-service/api/clients/${profile.getClientId()}/companies/${profile.getCompanyId()}/customers/${id}`,
    method: 'PATCH',
    data: params,
  });
}

const CustomerService = {
  fetch,
  create,
  update,
};

export default CustomerService;
