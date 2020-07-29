'use strict'

const config = require('../config')
const store = require('../store')

const newMealPlan = data => {
  return $.ajax({
    url: config.apiUrl + '/plans',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexMealPlan = () => {
  return $.ajax({
    url: config.apiUrl + '/plans',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMealPlan = id => {
  return $.ajax({
    url: config.apiUrl + '/plans/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMealPlan = (id, data) => {
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
  newMealPlan,
  indexMealPlan,
  deleteMealPlan,
  updateMealPlan
}
