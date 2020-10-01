'use strict'

const Team = use('App/Models/Team')

class TeamController {

    async index({ request, response, view }) {
        const teams = await Team.all()

        return response.json(teams)
    }

    async store({ request, response }) {
        const name = request.input('name')

        let team = new Team()
        team.name = name

        await team.save()
        return response.json(team)
    }

    async update({ params, request, response }) {
        const name = request.input('name')

        let team = await Team.find(params.id)

        team.name = name
        await team.save()
        return response.json(team)

    }

    async destroy({ params, request, response }) {
        let team = await Team.find(params.id)
        await team.delete()
        return response.json({ message: 'Team deleted!' })
    }
}

module.exports = TeamController
