'use strict'

const ui = require('./ui')

const hideViews = () => {
  $('article').addClass('hidden')
  $('form').addClass('hidden')
  $('section').addClass('hidden')
  $('.message').text('')
  $('.message').addClass('hidden')
}

const onHomeNav = () => {
  hideViews()
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
  ui.buildView({
    display: 'Meal Plan',
    path: 'meal-plan'
  })
}

module.exports = {
  onHomeNav,
  onRegisterNav,
  onLoginNav,
  onPasswordNav,
  onMealPlansNav
}
