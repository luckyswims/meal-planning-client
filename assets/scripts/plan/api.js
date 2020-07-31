'use strict'

const config = require('../config')
const store = require('../store')

const newPlan = data => {
  return $.ajax({
    url: config.apiUrl + '/plans',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexPlan = () => {
  return $.ajax({
    url: config.apiUrl + '/plans',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePlan = id => {
  return $.ajax({
    url: config.apiUrl + '/plans/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePlan = (id, data) => {
  return $.ajax({
    url: config.apiUrl + '/plans/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newPlan,
  indexPlan,
  deletePlan,
  updatePlan
}
