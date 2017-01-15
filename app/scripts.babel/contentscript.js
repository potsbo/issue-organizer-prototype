'use strict'

window.addEventListener('load', () => {
  const html = document.querySelector('html')
  html.setAttribute('ng-app', '')
  html.setAttribute('ng-csp', '')

  const header = document.querySelector('.header')
  header.setAttribute('ng-controller', 'MainController')

  const types = ['pulls', 'issues']
  types.forEach((type) => {
    const query = `.header-nav .header-nav-item a[href='/${type}']`
    const item = document.querySelector(query)
    item.setAttribute('href', `/${type}{{ query.${type} }}`)
  })

  const app = angular.module('GitHubIssueOrganizer', [])
  app.controller('MainController', ($scope) => {
    const queryFor = (type) => {
      // TODO: hard code here
      const user = 'potsbo'
      const org = 'wantedly'
      const q = `q=is%3Aopen+is%3A${type}+author%3A${user}+org%3A${org}`
      const utf8 = 'utf8=✓'
      return `?${utf8}&${q}`
    }

    $scope.query = {
      pulls: queryFor('pr'),
      issues: queryFor('issue')
    }
  })

  angular.bootstrap(html, ['GitHubIssueOrganizer'], [])
})
