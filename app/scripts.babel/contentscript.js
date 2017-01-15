'use strict'

window.addEventListener('load', () => {
  const angularize = () => {
    const html = document.querySelector('html')
    html.setAttribute('ng-app', '')
    html.setAttribute('ng-csp', '')

    const header = document.querySelector('.header')
    header.setAttribute('ng-controller', 'GitHubHeaderController')

    const types = ['pulls', 'issues']
    types.forEach((type) => {
      const query = `.header-nav .header-nav-item a[href='/${type}']`
      const item = document.querySelector(query)
      item.setAttribute('href', `/${type}{{ query.${type} }}`)
    })

    angular.bootstrap(document.querySelector('html'), ['GitHubIssueOrganizer'], [])
  }
  angularize()
})
