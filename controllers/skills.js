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
    skillsDb.findById(req.params.id, function(error, skills) {
      res.render('skills/show', {
        skills: skills,
        error: error
      })
    })
  }