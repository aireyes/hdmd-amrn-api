'use strict'

const { test, trait } = use('Test/Suite')('Team')
const Team = use('App/Models/Team')

trait('Test/ApiClient')

test('get list of teams', async ({ client }) => {
  await Team.create({
    name:'Milwaukee Bucks'
  })

  const response = await client.get('/api/teams').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    name:'Milwaukee Bucks'
  }])
})

test('get list of teams', async ({ client }) => {
  await Team.create({
    name:'Milwaukee Bucks'
  })

  const response = await client.get('/api/teams').end()

  response.assertStatus(200)
  response.assertJSONSubset([{
    name:'Milwaukee Bucks'
  }])
})