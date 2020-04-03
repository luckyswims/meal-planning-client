'use strict'
const newPlanTemplate = require('../templates/plan_form.handlebars')
const newPlanForm = () => {
  const planFormHTML = newPlanTemplate({})
  $('#new-resource-form').html(planFormHTML)
}

module.exports = {
  newPlanForm
}
