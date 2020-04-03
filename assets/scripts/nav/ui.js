'use strict'

const resourceViewTemplate = require('../templates/resource_view.handlebars')

const showView = name => {
  $(`#${name}`).removeClass('hidden')
}

const buildView = name => {
  const viewHTML = resourceViewTemplate({ resource: name })
  $('#resources').html(viewHTML)
}

module.exports = {
  showView,
  buildView
}
