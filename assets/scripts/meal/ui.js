'use strict'

const store = require('../store')
const utilities = require('../utilities/utilities')
const newMealTemplate = require('../templates/meal_new_form.handlebars')
const indexMealTemplate = require('../templates/meal_index.handlebars')
const editMealTemplate = require('../templates/meal_edit_form.handlebars')
const showMealTemplate = require('../templates/meal_show.handlebars')
const findMealTemplate = require('../templates/meal_find_form.handlebars')

const newMealForm = () => {
  const mealFormHTML = newMealTemplate({})
  utilities.clearView()
  $('#resource-form').html(mealFormHTML)
}

const newMealSuccess = data => {
  utilities.clearView()
  $('#user-message').removeClass('hidden')
  $('#user-message').text('New Meal Created')
}

const newMealFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. A new meal was unable to be created.')
}

const indexMealSuccess = data => {
  store.meals = data.meals
  const indexMealHTML = indexMealTemplate({ meals: data.meals })
  utilities.clearView()
  $('#resource-view').html(indexMealHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plans Retrieved')
}

const indexMealFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. You meal plans could not be retrieved.')
}

const deleteMealSuccess = id => {
  $(`#meal${id}`).remove()
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Deleted')
}

const deleteMealFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. You meal plans could not be deleted.')
}

const editMeal = id => {
  const targetMeal = store.meals.find(meal => meal.id === id)
  const editPlanHTML = editMealTemplate({ meal: targetMeal })
  $(`#meal${id}`).html(editPlanHTML)
}

const updateMealSuccess = data => {
  const showMealHTML = showMealTemplate({ meal: data.meal })
  $(`#meal${data.meal.id}`).html(showMealHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Meal Plan Updated')
}

const findMealForm = () => {
  const findMealHTML = findMealTemplate({})
  utilities.clearView()
  $('#resource-form').html(findMealHTML)
}

const findMealSuccess = (data, target) => {
  store.meals = data.meals
  const results = data.meals.filter(meal => meal.name.toLowerCase().includes(target.toLowerCase()))
  const findMealResultHTML = indexMealTemplate({ meals: results })
  $('#resource-view').html(findMealResultHTML)
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Search completed.')
}

const findMealFailure = () => {
  $('#user-message').removeClass('hidden')
  $('#user-message').text('Error. Your search could not be performed.')
}

module.exports = {
  newMealForm,
  newMealSuccess,
  newMealFailure,
  indexMealSuccess,
  indexMealFailure,
  deleteMealSuccess,
  deleteMealFailure,
  editMeal,
  updateMealSuccess,
  findMealForm,
  findMealSuccess,
  findMealFailure
}
