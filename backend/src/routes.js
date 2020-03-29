const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')  
const SessionController = require('./controllers/SessionController')  

const validatorOngs = require('./validators/ValidatorOngs')
const validatorSessions = require('./validators/ValidatorSessions')
const validatorIncidents = require('./validators/ValidatorIncidents')
const validatorProfile = require('./validators/ValidatorProfile')

const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', validatorOngs.create(), OngController.create)

routes.post('/sessions', validatorSessions.session(), SessionController.create)

routes.get('/incidents', validatorIncidents.list(), IncidentController.index)
routes.post('/incidents', validatorIncidents.create(), IncidentController.create)
routes.delete('/incidents/:id', validatorIncidents.delete(), IncidentController.delete)

routes.get('/profile', validatorProfile.list(), ProfileController.index)


module.exports = routes