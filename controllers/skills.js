import * as skillsDb from '../data/skill-db.js'

export {
    index, 
    show
}

function index(req, res) {
    skillsDb.find({}, function(error, skills) {
      res.render('skills/index', {
        skills: skills,
        error: error
      })
    })
  }

  function show(req, res) {
    skillsDb.findById(req.params.id, function(error, skill) {
      res.render('todos/show', {
        skills: skills,
        error: error
      })
    })
  }