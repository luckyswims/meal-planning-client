'use strict'

const getFormFields = require('../../../lib/get-Form-Fields')
const ui = require('./ui')
const api = require('./api')

const onNewMealForm = event => {
  event.preventDefault()
  ui.newMealForm()
}

const onNewMeal = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newMeal(data)
    .then(ui.newMealSuccess)
    .catch(ui.newMealFailure)
}

const onIndexMeal = event => {
  event.preventDefault()
  api.indexMeal()
    .then(ui.indexMealSuccess)
    .catch(ui.indexMealFailure)
}

const onDeleteMeal = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteMeal(id)
    .then(() => { ui.deleteMealSuccess(id) })
    .catch(ui.deleteMealFailure)
}

const onEditMeal = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.editMeal(id)
}

const onCancelEditMeal = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  ui.cancelEditMeal(id)
}

const onUpdateMeal = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateMeal(id, data)
    .then(ui.updateMealSuccess)
    .catch(ui.updateMealFailure)
}

const onFindMealForm = event => {
  event.preventDefault()
  ui.findMealForm()
}

const onFindMeal = event => {
  event.preventDefault()
  const target = $(event.target).find('#meal-name').val()
  api.indexMeal()
    .then(data => ui.findMealSuccess(data, target))
    .catch(ui.findMealFailure)
}

module.exports = {
  onNewMealForm,
  onNewMeal,
  onIndexMeal,
  onDeleteMeal,
  onEditMeal,
  onCancelEditMeal,
  onUpdateMeal,
  onFindMealForm,
  onFindMeal
}
