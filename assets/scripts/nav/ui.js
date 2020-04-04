'use strict'

const store = require('../store')
const resourceViewTemplate = require('../templates/resource_view.handlebars')
const homePageTemplate = require('../templates/home_page.handlebars')

const showView = name => {
  $(`#${name}`).removeClass('hidden')
}

const buildView = nameObject => {
  const viewHTML = resourceViewTemplate({ names: nameObject })
  $('#resources').html(viewHTML)
  $('#resources').removeClass('hidden')
}

const showHome = () => {
  console.log('nav ui')
  console.log(store)
  const homePageHTML = homePageTemplate({ store })
  console.log(homePageHTML)
  $('#instructions').html(homePageHTML)
  $('#instructions').removeClass('hidden')
}

module.exports = {
  showView,
  buildView,
  showHome
}
