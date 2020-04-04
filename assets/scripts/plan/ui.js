'use strict'

const store = require('../store')
const newPlanTemplate = require('../templates/plan_new_form.handlebars')
const indexPlanTemplate = require('../templates/plan_index.handlebars')
const editPlanTemplate = require('../templates/plan_edit_form.handlebars')
const showPlanTemplate = require('../templates/plan_show.handlebars')
const findPlanTemplate = require('../templates/plan_find_form.handlebars')

const newPlanForm = () => {
  const planFormHTML = newPlanTemplate({})
  $('#resource-form').html(planFormHTML)
}

const newMealPlanSuccess = data => {
  $('#resource-form').empty()
  $('#user-message').text('Meal Plan Created')
}

const newMealPlanFailure = error => {
  console.log('newMealPlanFailure error is: ', error)
  $('#game-message').text('Error. A new meal plan was unable to be created.')
}

const indexMealPlanSuccess = data => {
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
  const showPlanHTML = showPlanTemplate({ plan: data.meal_plan })
  $(`#meal-plan${data.meal_plan.id}`).html(showPlanHTML)
}

const findMealPlan = () => {
  const findPlanHTML = findPlanTemplate({})
  $('#resource-form').html(findPlanHTML)
}

const findPlanFormSuccess = (data, target) => {
  store.meal_plans = data.meal_plans
  const results = data.meal_plans.filter(mealPlan => mealPlan.name.includes(target))
  const findPlanResultHTML = indexPlanTemplate({ plans: results })
  $('#resource-view').html(findPlanResultHTML)
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
  updateMealPlanSuccess,
  findMealPlan,
  findPlanFormSuccess
}
