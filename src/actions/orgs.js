import trello from 'libs/trello'

export const GET_ORGS = Symbol('GET_ORGS')
export const GET_ORGS_SUCCESS = Symbol('GET_ORGS_SUCCESS')

export function getOrgs ({ id }) {
  return dispatch => {
    dispatch({
      type: GET_ORGS
    })

    const data = {}
    return trello.makeRequest('get', `/1/members/${id}/organizations`).then((res) => {
      data.items = res
      dispatch(onGetOrg(id, data))
    })
  }
}

function onGetOrg (id, payload) {
  return {
    type: GET_ORGS_SUCCESS,
    id,
    payload
  }
}
