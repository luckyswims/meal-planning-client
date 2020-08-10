'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const navEvents = require('./nav/events')
const planEvents = require('./plan/events')
const mealEvents = require('./meal/events')

$(() => {
  navEvents.onHomeNav()
  $('#nav-home').on('click', navEvents.onHomeNav)
  $('#nav-register').on('click', navEvents.onRegisterNav)
  $('#nav-login').on('click', navEvents.onLoginNav)
  $('.nav-resource').on('click', navEvents.onResourceNav)
  $('#nav-password').on('click', navEvents.onPasswordNav)
  $('#nav-logout').on('click', authEvents.onSignOut)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-meal-plan').on('click', planEvents.onNewPlanForm)
  $('#index-meal-plan').on('click', planEvents.onIndexPlan)
  $('#find-meal-plan').on('click', planEvents.onFindPlanForm)
  $('#resources').on('submit', '#new-plan', planEvents.onNewPlan)
  $('#resources').on('click', '.plan-delete-button', planEvents.onDeletePlan)
  $('#resources').on('click', '.plan-edit-button', planEvents.onEditPlan)
  $('#resources').on('submit', '.edit-plan', planEvents.onUpdatePlan)
  $('#resources').on('submit', '#find-plan-form', planEvents.onFindPlan)
  $('#resources').on('click', '.add-meal-button', planEvents.onAddMeal)
  $('#resources').on('click', '.remove-meal-button', planEvents.onRemoveMeal)
  $('#create-meal').on('click', mealEvents.onNewMealForm)
  $('#index-meal').on('click', mealEvents.onIndexMeal)
  $('#find-meal').on('click', mealEvents.onFindMealForm)
  $('#resources').on('submit', '#new-meal', mealEvents.onNewMeal)
  $('#resources').on('click', '.meal-delete-button', mealEvents.onDeleteMeal)
  $('#resources').on('click', '.meal-edit-button', mealEvents.onEditMeal)
  $('#resources').on('submit', '.edit-meal', mealEvents.onUpdateMeal)
  $('#resources').on('submit', '#find-meal-form', mealEvents.onFindMeal)
})
