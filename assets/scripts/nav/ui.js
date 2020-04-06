'use strict'

const store = require('../store')
const homePageTemplate = require('../templates/home_page.handlebars')

const showView = name => {
  $(`#${name}`).removeClass('hidden')
}

const showHome = () => {
  const homePageHTML = homePageTemplate({ store })
  $('#instructions').html(homePageHTML)
  $('#instructions').removeClass('hidden')
}

module.exports = {
  showView,
  showHome
}
