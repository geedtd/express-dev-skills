import { Router } from 'express'
import * as skillsDb from '../data/skill-db.js'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  skillsDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
})
export {
  router
}
