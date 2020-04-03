'use strict'
const newPlanTemplate = require('../templates/plan_form.handlebars')

const newPlanForm = () => {
  const planFormHTML = newPlanTemplate({})
  $('#new-resource-form').html(planFormHTML)
}

const newMealPlanSuccess = data => {
  $('#new-resource-form').empty()
  console.log(data)
  $('#user-message').text('Meal Plan Created')
}

module.exports = {
  newPlanForm,
  newMealPlanSuccess
}
