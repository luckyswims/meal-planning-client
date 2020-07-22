'use strict'

const config = require('../config')

const newMeal = data => {
  return $.ajax({
    url: config.apiUrl + '/meals',
    method: 'POST',
    data
  })
}

const indexMeal = () => {
  return $.ajax({
    url: config.apiUrl + '/meals',
    method: 'GET'
  })
}

const deleteMeal = id => {
  return $.ajax({
    url: config.apiUrl + '/meals/' + id,
    method: 'DELETE'
  })
}

const updateMeal = (id, data) => {
  return $.ajax({
    url: config.apiUrl + '/meals/' + id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  newMeal,
  indexMeal,
  deleteMeal,
  updateMeal
}
