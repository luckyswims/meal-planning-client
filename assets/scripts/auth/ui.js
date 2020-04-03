'use strict'

const store = require('../store')

const clearForm = formID => {
  $(`#${formID}`)[0].reset()
  $(`#${formID}`).addClass('hidden')
}

const success = () => {
  $('#auth-message').removeClass('failure')
  $('#auth-message').removeClass('hidden')
  $('#auth-message').addClass('success')
}

const failure = () => {
  $('#auth-message').removeClass('success')
  $('#auth-message').removeClass('hidden')
  $('#auth-message').addClass('failure')
}

const signUpSuccess = function (data) {
  $('#auth-message').text('Signed up successfully. Please login to proceed.')
  success()
  clearForm('sign-up')
}

const signUpFailure = function (error) {
  $('#auth-message').text('Sign up failed')
  failure()
  console.log('signUpFailure error is: ', error)
  $('#sign-up')[0].reset()
}

const signInSuccess = function (data) {
  $('#auth-message').text('Signed in successfully')
  success()
  clearForm('sign-in')
  $('nav > .nav > .hidden').removeClass('hidden')
  $('#nav-login').addClass('hidden')
  $('#nav-register').addClass('hidden')
  store.user = data.user
}

const signInFailure = function (error) {
  $('#auth-message').text('Sign in failed')
  failure()
  console.log('signInFailure error is: ', error)
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = function (data) {
  $('#auth-message').text('Changed password')
  success()
  $('#change-password')[0].reset()
  $('#change-password').addClass('hidden')
}

const changePasswordFailure = function (error) {
  $('#auth-message').text('Could not change password')
  failure()
  console.log('changePasswordFailure error is: ', error)
  $('#change-password')[0].reset()
}

const signOutSuccess = function (data) {
  $('nav > button').addClass('hidden')
  $('#nav-home').removeClass('hidden')
  $('#nav-login').removeClass('hidden')
  $('#nav-register').removeClass('hidden')
  $('form').addClass('hidden')
  $('.message').addClass('hidden')
  $('.message').text('')
  $('#auth-message').text('Signed Out')
  success()
}

const signOutFailure = function (error) {
  $('#auth-message').text('Could not sign out')
  failure()
  console.log('signOutFailure error is: ', error)
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
