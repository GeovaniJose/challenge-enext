import shortid from 'shortid'

const storage = {
  index () {
    const listDogs = JSON.parse(localStorage.getItem('@ourbreeds/listDogs'))

    return listDogs || []
  },

  store (newDog) {
    // Crete an UUID for object
    newDog._id = shortid.generate()

    // Save current Date and Hour at createdAt
    newDog.createdAt = new Date()

    // Add new dog in list
    const newListDogs = this.index()
    newListDogs.push(newDog)

    // Add list in storage
    localStorage.setItem('@ourbreeds/listDogs', JSON.stringify(newListDogs))
  }
}

export default storage