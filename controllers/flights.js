import { Flight } from "../models/flight.js"


function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
    // departureDefault: dateFromNow(365),
  })
}


export {
  newFlight as new 
}