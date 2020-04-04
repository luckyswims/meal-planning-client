'use strict'

const getFormFields = require('../../../lib/get-Form-Fields')
const ui = require('./ui')
const api = require('./api')

const onNewPlanForm = event => {
  event.preventDefault()
  ui.newPlanForm()
}

const onNewMealPlan = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newMealPlan(data)
    .then(ui.newMealPlanSuccess)
    .catch(ui.newMealPlanFailure)
}

const onIndexMealPlan = event => {
  event.preventDefault()
  api.indexMealPlan()
    .then(ui.indexMealPlanSuccess)
    .catch(ui.indexMealPlanFailure)
}

const onDeleteMealPlan = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteMealPlan(id)
    .then(() => { ui.deleteMealPlanSuccess(id) })
    .catch(ui.deleteMealPlanFailure)
}

const onEditMealPlan = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.editMealPlan(id)
}

const onUpdateMealPlan = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateMealPlan(id, data)
    .then(ui.updateMealPlanSuccess)
    .catch(ui.updateMealPlanFailure)
}

const onFindMealPlan = event => {
  event.preventDefault()
  ui.findMealPlan()
}

const onFindPlanForm = event => {
  event.preventDefault()
  const target = $(event.target).find('#meal-plan-name').val()
  api.indexMealPlan()
    .then(data => ui.findPlanFormSuccess(data, target))
    .catch(ui.findPlanFormFail)
}

module.exports = {
  onNewPlanForm,
  onNewMealPlan,
  onIndexMealPlan,
  onDeleteMealPlan,
  onEditMealPlan,
  onUpdateMealPlan,
  onFindMealPlan,
  onFindPlanForm
}
