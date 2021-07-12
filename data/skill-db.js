export { 
	find, 
  findById,
  create,
  findByIdAndDelete
}

function findByIdAndDelete(id, callback) {
  try { 
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkil = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

const skills = [
  {text: 'HTML', mastered: true, _id: 124511},
  {text: 'CSS', mastered: true, _id: 124512},
  {text: 'JS', mastered: true, _id: 134513},
  {text: 'Express', mastered: true, _id: 134514},
  {text: 'React', mastered: false, _id: 134515}
]

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No todo was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}