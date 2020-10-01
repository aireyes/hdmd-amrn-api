'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamsSchema extends Schema {
  up () {
    this.table('teams', (table) => {
      table.timestamps()
    })
  }

  down () {
    this.table('teams', (table) => {
      // reverse alternations
    })
  }
}

module.exports = TeamsSchema
