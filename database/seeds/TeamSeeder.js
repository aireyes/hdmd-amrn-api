'use strict'

/*
|--------------------------------------------------------------------------
| TeamSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TeamSeeder {
  async run() {
    // const teams = await Database.table('teams')
    // console.log(teams)
    await Database.table('teams').truncate()
    const teams = [
      {
        name: 'Chicago Bulls',
      },
      {
        name: 'Boston Celtics',
      },
      {
        name: 'Los Angeles Lakers',
      },
      {
        name: 'Miami Heat',
      },
      {
        name: 'Denver Nuggets',
      },
    ]

    await Database.table('teams').insert(teams)

    console.log(teams)
  }
}

module.exports = TeamSeeder

/**
 * You first need to create a formatting function to pad numbers to two digits…
 **/
function twoDigits(d) {
  if (0 <= d && d < 10) return "0" + d.toString();
  if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
  return d.toString();
}

/**
* …and then create the method to output the date string as desired.
* Some people hate using prototypes this way, but if you are going
* to apply this to more than one Date object, having it as a prototype
* makes sense.
**/
Date.prototype.toMysqlFormat = function () {
  return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};
