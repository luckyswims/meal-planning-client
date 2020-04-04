'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const navEvents = require('./nav/events')
const planEvents = require('./plan/events')

$(() => {
  navEvents.onHomeNav()
  $('#nav-home').on('click', navEvents.onHomeNav)
  $('#nav-register').on('click', navEvents.onRegisterNav)
  $('#nav-login').on('click', navEvents.onLoginNav)
  $('#nav-password').on('click', navEvents.onPasswordNav)
  $('#nav-meal-plans').on('click', navEvents.onMealPlansNav)
  $('#nav-logout').on('click', authEvents.onSignOut)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#resources').on('click', '#create-meal-plan', planEvents.onNewPlanForm)
  $('#resources').on('submit', '#new-meal-plan', planEvents.onNewMealPlan)
  $('#resources').on('click', '#index-meal-plan', planEvents.onIndexMealPlan)
  $('#resources').on('click', '.plan-delete-button', planEvents.onDeleteMealPlan)
  $('#resources').on('click', '.plan-edit-button', planEvents.onEditMealPlan)
  $('#resources').on('submit', '.edit-meal-plan', planEvents.onUpdateMealPlan)
  $('#resources').on('click', '#find-meal-plan', planEvents.onFindMealPlan)
  $('#resources').on('submit', '#find-plan-form', planEvents.onFindPlanForm)
})
