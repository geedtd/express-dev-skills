import * as skillsDb from '../data/skill-db.js'

export {
    index, 
    show,
    newSkill as new,
    create,
    deleteSkill as delete

}

function deleteSkill(req, res) {
    skillsDb.findByIdAndDelete(req.params.id, function(error, todo) {
      res.redirect('/skills')
    })
  }

function create(req, res) {
    skillsDb.create(req.body, function(error, skill) {
        res.redirect('/skills')
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function index(req, res) {
    skillsDb.find({}, function(error, skills) {
      res.render('skills/index', {
        skills: skills,
        error: error,
        time: req.time,
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