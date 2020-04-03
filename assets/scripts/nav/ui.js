'use strict'

const resourceViewTemplate = require('../templates/resource_view.handlebars')

const showView = name => {
  $(`#${name}`).removeClass('hidden')
}

const buildView = nameObject => {
  const viewHTML = resourceViewTemplate({ names: nameObject })
  $('#resources').html(viewHTML)
  $('#resources').removeClass('hidden')
}

module.exports = {
  showView,
  buildView
}
