import { Router } from 'express'

const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// Get new flights
router.get('/new', flightsCtrl.new)

/* get / flights */
// router.get('/', flightsCtrl.index)

// router.post('/', flightsCtrl.create)

export {
  router
}
