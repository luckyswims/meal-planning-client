'use strict'

const store = require('../store')
const newPlanTemplate = require('../templates/plan_new_form.handlebars')
const indexPlanTemplate = require('../templates/plan_index.handlebars')
const editPlanTemplate = require('../templates/plan_edit_form.handlebars')
const showPlanTemplate = require('../templates/plan_show.handlebars')
const findPlanTemplate = require('../templates/plan_find_form.handlebars')

const clearView = () => {
  $('#user-message').empty()
  $('#resource-view').empty()
  $('#resource-form').empty()
}

const newPlanForm = () => {
  const planFormHTML = newPlanTemplate({})
  clearView()
  $('#resource-form').html(planFormHTML)
}

const newMealPlanSuccess = data => {
  clearView()
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Created')
}

const newMealPlanFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. A new meal plan was unable to be created.')
}

const indexMealPlanSuccess = data => {
  store.meal_plans = data.meal_plans
  const indexPlanHTML = indexPlanTemplate({ plans: data.meal_plans })
  clearView()
  $('#resource-view').html(indexPlanHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plans Retrieved')
}

const indexMealPlanFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. You meal plans could not be retrieved.')
}

const deleteMealPlanSuccess = id => {
  $(`#meal-plan${id}`).remove()
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Deleted')
}

const deleteMealPlanFailure = () => {
  $('#user-message').removeClass('hidden')
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
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Updated')
}

const findMealPlan = () => {
  const findPlanHTML = findPlanTemplate({})
  clearView()
  $('#resource-form').html(findPlanHTML)
}

const findPlanFormSuccess = (data, target) => {
  store.meal_plans = data.meal_plans
  const results = data.meal_plans.filter(mealPlan => mealPlan.name.toLowerCase().includes(target.toLowerCase()))
  const findPlanResultHTML = indexPlanTemplate({ plans: results })
  $('#resource-view').html(findPlanResultHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Search completed.')
}

const findPlanFormFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. Your search could not be performed.')
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
  findPlanFormSuccess,
  findPlanFormFailure
}
