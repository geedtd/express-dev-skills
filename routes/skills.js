import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})
app.get('/skills', function(req, res) {
  skillsDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos: todos,
      error: error
    })
  })
})
export {
  router
}
