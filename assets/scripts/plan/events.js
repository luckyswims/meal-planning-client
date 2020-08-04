'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-Form-Fields')
const ui = require('./ui')
const api = require('./api')
const mealApi = require('../meal/api')

const onNewPlanForm = event => {
  event.preventDefault()
  mealApi.indexMeal()
    .then(res => {
      store.meals = res.meals
    })
    .then(ui.newPlanForm)
}

const getPlanData = form => {
  const formData = getFormFields(form)
  const name = formData.plan.name
  const keys = Object.keys(formData.plan)
  const mealList = keys.filter(key => key.includes('meal'))
  const meals = mealList.map(key => formData.plan[key]).filter(meal => meal !== '')
  const mealIndex = []
  meals.forEach(name => mealIndex.push(store.meals.findIndex(meal => meal.name === name)))
  const mealIds = mealIndex.map(index => store.meals[index].id)
  const data = {
    plan: { name, meal_ids: mealIds }
  }
  return data
}
const onNewPlan = event => {
  event.preventDefault()
  const data = getPlanData(event.target)
  console.log('Data is: ', data)
  api.newPlan(data)
    .then(ui.newPlanSuccess)
    .catch(ui.newPlanFailure)
}

const onIndexPlan = event => {
  event.preventDefault()
  api.indexPlan()
    .then(ui.indexPlanSuccess)
    .catch(ui.indexPlanFailure)
}

const onDeletePlan = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deletePlan(id)
    .then(() => { ui.deletePlanSuccess(id) })
    .catch(ui.deletePlanFailure)
}

const onEditPlan = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  mealApi.indexMeal()
    .then(res => {
      store.meals = res.meals
    })
    .then(() => { ui.editPlan(id) })
}

const onUpdatePlan = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updatePlan(id, data)
    .then(ui.updatePlanSuccess)
    .catch(ui.updatePlanFailure)
}

const onFindPlanForm = event => {
  event.preventDefault()
  ui.findPlanForm()
}

const onFindPlan = event => {
  event.preventDefault()
  const target = $(event.target).find('#plan-name').val()
  api.indexPlan()
    .then(data => ui.findPlanSuccess(data, target))
    .catch(ui.findPlanFailure)
}

module.exports = {
  onNewPlanForm,
  onNewPlan,
  onIndexPlan,
  onDeletePlan,
  onEditPlan,
  onUpdatePlan,
  onFindPlanForm,
  onFindPlan
}
