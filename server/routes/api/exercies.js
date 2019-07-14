const Workout = require('../../models/Workout');

module.exports = (app) => {

  app.get('/api/exercises', (req, res, next) => {
    res.send({words: "Success."})
  });

}
