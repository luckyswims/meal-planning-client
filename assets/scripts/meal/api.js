'use strict'

const config = require('../config')
const store = require('../store')

const newMeal = data => {
  return $.ajax({
    url: config.apiUrl + '/meals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexMeal = () => {
  return $.ajax({
    url: config.apiUrl + '/meals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteMeal = id => {
  return $.ajax({
    url: config.apiUrl + '/meals/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMeal = (id, data) => {
  return $.ajax({
    url: config.apiUrl + '/meals/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  newMeal,
  indexMeal,
  deleteMeal,
  updateMeal
}
