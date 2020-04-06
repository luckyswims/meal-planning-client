'use strict'

const ui = require('./ui')

const hideViews = () => {
  $('article').addClass('hidden')
  $('.auth-form').addClass('hidden')
  $('#resources').addClass('hidden')
  $('.message').text('')
  $('.message').addClass('hidden')
}

const onHomeNav = () => {
  hideViews()
  ui.showHome()
}

const onRegisterNav = () => {
  hideViews()
  ui.showView('sign-up')
}

const onLoginNav = () => {
  hideViews()
  ui.showView('sign-in')
}

const onPasswordNav = () => {
  hideViews()
  ui.showView('change-password')
}

const onMealPlansNav = () => {
  hideViews()
  ui.showView('resources')
}

module.exports = {
  onHomeNav,
  onRegisterNav,
  onLoginNav,
  onPasswordNav,
  onMealPlansNav
}
