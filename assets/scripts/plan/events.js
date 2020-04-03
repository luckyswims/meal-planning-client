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

module.exports = {
  onNewPlanForm,
  onNewMealPlan,
  onIndexMealPlan
}
