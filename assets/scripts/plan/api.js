'use strict'

const config = require('../config')
const store = require('../store')

const newMealPlan = data => {
  return $.ajax({
    url: config.apiUrl + '/meal_plans',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexMealPlan = () => {
  return $.ajax({
    url: config.apiUrl + '/meal_plans',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newMealPlan,
  indexMealPlan
}
