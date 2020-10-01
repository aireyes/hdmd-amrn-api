'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/api/teams', 'TeamController.store')
Route.get('/api/teams','TeamController.index')
Route.put('/api/teams/:id', 'TeamController.update')
Route.delete('api/teams/:id', 'TeamController.destroy')