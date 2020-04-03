'use strict'

const store = require('../store')
const newPlanTemplate = require('../templates/plan_form.handlebars')
const indexPlanTemplate = require('../templates/plan_index.handlebars')
const editPlanTemplate = require('../templates/plan_edit_form.handlebars')
const showPlanTemplate = require('../templates/plan_show.handlebars')

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
  store.meal_plans = data.meal_plans
  const indexPlanHTML = indexPlanTemplate({ plans: data.meal_plans })
  $('#resource-view').html(indexPlanHTML)
  $('#user-message').text('Meal Plans Retrieved')
}

const indexMealPlanFailure = error => {
  console.log('newMealPlanFailure error is: ', error)
  $('#game-message').text('Error. You meal plans could not be retrieved.')
}

const deleteMealPlanSuccess = id => {
  $(`#meal-plan${id}`).remove()
  $('#user-message').text('Meal Plan Deleted')
}

const deleteMealPlanFailure = error => {
  console.log('deleteMealPlanFailure error is: ', error)
  $('#user-message').text('Error. You meal plans could not be deleted.')
}

const editMealPlan = id => {
  const targetPlan = store.meal_plans.find(plan => plan.id === id)
  const editPlanHTML = editPlanTemplate({ plan: targetPlan })
  $(`#meal-plan${id}`).html(editPlanHTML)
}

const updateMealPlanSuccess = data => {
  console.log(data)
  const showPlanHTML = showPlanTemplate({ plan: data.meal_plan })
  $(`#meal-plan${data.meal_plan.id}`).html(showPlanHTML)
}

module.exports = {
  newPlanForm,
  newMealPlanSuccess,
  newMealPlanFailure,
  indexMealPlanSuccess,
  indexMealPlanFailure,
  deleteMealPlanSuccess,
  deleteMealPlanFailure,
  editMealPlan,
  updateMealPlanSuccess
}
