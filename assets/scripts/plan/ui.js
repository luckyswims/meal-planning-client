'use strict'

const store = require('../store')
const utilities = require('../utilities/utilities')
const newPlanTemplate = require('../templates/plan_new_form.handlebars')
const indexPlanTemplate = require('../templates/plan_index.handlebars')
const editPlanTemplate = require('../templates/plan_edit_form.handlebars')
const showPlanTemplate = require('../templates/plan_show.handlebars')
const findPlanTemplate = require('../templates/plan_find_form.handlebars')
const planMealInputTemplate = require('../templates/plan_meal_input.handlebars')

const newPlanForm = () => {
  const planFormHTML = newPlanTemplate({ meals: store.meals })
  utilities.clearView()
  $('#resource-form').html(planFormHTML)
}

const newPlanSuccess = data => {
  utilities.clearView()
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Created')
}

const newPlanFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. A new meal plan was unable to be created.')
}

const indexPlanSuccess = data => {
  store.plans = data.plans
  const indexPlanHTML = indexPlanTemplate({ plans: data.plans })
  utilities.clearView()
  $('#resource-view').html(indexPlanHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plans Retrieved')
}

const indexPlanFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. You meal plans could not be retrieved.')
}

const deletePlanSuccess = id => {
  $(`#plan${id}`).remove()
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Deleted')
}

const deletePlanFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. You meal plans could not be deleted.')
}

const editPlan = id => {
  const targetPlan = store.plans.find(plan => plan.id === id)
  const editPlanHTML = editPlanTemplate({ plan: targetPlan, meals: store.meals })
  $(`#plan${id}`).html(editPlanHTML)
}

const updatePlanSuccess = data => {
  const showPlanHTML = showPlanTemplate({ plan: data.plan })
  $(`#plan${data.plan.id}`).html(showPlanHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Updated')
}

const findPlanForm = () => {
  const findPlanHTML = findPlanTemplate({})
  utilities.clearView()
  $('#resource-form').html(findPlanHTML)
}

const findPlanSuccess = (data, target) => {
  store.plans = data.plans
  const results = data.plans.filter(Plan => Plan.name.toLowerCase().includes(target.toLowerCase()))
  const findPlanResultHTML = indexPlanTemplate({ plans: results })
  $('#resource-view').html(findPlanResultHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Search completed.')
}

const findPlanFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. Your search could not be performed.')
}

const addMeal = id => {
  const index = $(`#${id} div`).filter(':last').data('index') + 1 || 1
  console.log(index)
  const mealInputHTML = planMealInputTemplate({ index })
  $(`#${id} div`).filter(':last').after(mealInputHTML)
}

module.exports = {
  newPlanForm,
  newPlanSuccess,
  newPlanFailure,
  indexPlanSuccess,
  indexPlanFailure,
  deletePlanSuccess,
  deletePlanFailure,
  editPlan,
  updatePlanSuccess,
  findPlanForm,
  findPlanSuccess,
  findPlanFailure,
  addMeal
}
