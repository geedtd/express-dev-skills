export { 
	find
}

const skills = [
  {text: 'HTML', mastered: true, _id: 124511},
  {text: 'CSS', mastered: true, _id: 124512},
  {text: 'JS', mastered: true, _id: 134513},
  {text: 'Express', mastered: true, _id: 134514},
  {text: 'React', mastered: false, _id: 134515}
]

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