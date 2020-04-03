'use strict'
const newPlanTemplate = require('../templates/plan_form.handlebars')
const indexPlanTemplate = require('../templates/plan_index.handlebars')

const newPlanForm = () => {
  const planFormHTML = newPlanTemplate({})
  $('#new-resource-form').html(planFormHTML)
}

const newMealPlanSuccess = data => {
  $('#new-resource-form').empty()
  console.log(data)
  $('#user-message').text('Meal Plan Created')
}

const newMealPlanFailure = error => {
  console.log('newMealPlanFailure error is: ', error)
  $('#game-message').text('Error. A new meal plan was unable to be created.')
}

const indexMealPlanSuccess = data => {
  console.log(data.meal_plans)
  const indexPlanHTML = indexPlanTemplate({ plans: data.meal_plans })
  console.log(indexPlanHTML)
  $('#resource-view').html(indexPlanHTML)
  $('#user-message').text('Meal Plans Retrieved')
}

const indexMealPlanFailure = error => {
  console.log('newMealPlanFailure error is: ', error)
  $('#game-message').text('Error. You meal plans could not be retrieved.')
}

module.exports = {
  newPlanForm,
  newMealPlanSuccess,
  newMealPlanFailure,
  indexMealPlanSuccess,
  indexMealPlanFailure
}
