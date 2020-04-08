'use strict'

const store = require('../store')
const navUi = require('../nav/ui')

const clearForm = formID => {
  $(`#${formID}`)[0].reset()
  $(`#${formID}`).addClass('hidden')
}

const success = () => {
  $('#user-message').removeClass('failure')
  $('#user-message').removeClass('hidden')
  $('#user-message').addClass('success')
}

const failure = () => {
  $('#user-message').removeClass('success')
  $('#user-message').removeClass('hidden')
  $('#user-message').addClass('failure')
}

const signUpSuccess = function (data) {
  $('#user-message').text('Signed up successfully. Please login to proceed.')
  success()
  clearForm('sign-up')
}

const signUpFailure = function () {
  $('#user-message').text('Sign up failed')
  failure()
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#user-message').text('Signed in successfully')
  success()
  clearForm('sign-in')
  $('nav > .nav > .hidden').removeClass('hidden')
  $('#nav-login').addClass('hidden')
  $('#nav-register').addClass('hidden')
  store.isSignedIn = true
  store.user = data.user
  navUi.showHome()
}

const signInFailure = function () {
  $('#user-message').text('Sign in failed')
  failure()
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (data) {
  $('#user-message').text('Changed password')
  success()
  $('#change-password')[0].reset()
  $('#change-password').addClass('hidden')
}

const changePasswordFailure = function () {
  $('#user-message').text('Could not change password')
  failure()
  $('#change-password')[0].reset()
}

const signOutSuccess = function (data) {
  $('nav .nav-item').addClass('hidden')
  $('#nav-home').removeClass('hidden')
  $('#nav-login').removeClass('hidden')
  $('#nav-register').removeClass('hidden')
  $('article').addClass('hidden')
  $('form').addClass('hidden')
  $('section').addClass('hidden')
  $('.message').addClass('hidden')
  $('.message').text('')
  $('#user-message').text('Signed Out')
  store.isSignedIn = false
  success()
}

const signOutFailure = function () {
  $('#user-message').text('Could not sign out')
  failure()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
