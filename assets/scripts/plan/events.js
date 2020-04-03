'use strict'

const getFormFields = require('../../../lib/get-Form-Fields')
const ui = require('./ui')

const onNewPlanForm = function (event) {
  event.preventDefault()
  ui.newPlanForm()
}

module.exports = {
  onNewPlanForm
}
