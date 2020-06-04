const storage = {
  index () {
    const listDogs = JSON.parse(localStorage.getItem('@ourbreeds/listDogs'))

    return listDogs || []
  },

  store (newDog) {
    // Add new dog in list
    const newListDogs = this.index()
    newListDogs.push(newDog)

    // Add list in storage
    localStorage.setItem('@ourbreeds/listDogs', JSON.stringify(newListDogs))
  }
}

export default storage