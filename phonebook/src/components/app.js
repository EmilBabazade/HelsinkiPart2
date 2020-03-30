import React, { useState, useEffect } from 'react'
import AddNew from './addNewPerson'
import ListAll from './listAllPeople'
import SearchFilter from './searchFilter'
import axios from 'axios'

// TODO: exercise 2.9*: The Phonebook Step4


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState( 0 )
  const [ filteredPersons, SetFilteredPersons ] = useState( persons )

  useEffect(() => {
    axios
      .get( 'http://127.0.0.1:3002/persons' )
      .then( response => {
        setPersons( response.data )
        SetFilteredPersons( response.data )
      } )
  }, [])

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchFilter 
        filteredPersonsSetter={ SetFilteredPersons }
        persons={ persons }
        filteredPersons={ filteredPersons }
      />
      <AddNew 
        name={ newName }
        nameSetter={ setNewName }
        phoneNumSetter={ setNewPhoneNumber }
        phoneNumber={ newPhoneNumber }
        persons={ persons }
        personsSetter={ setPersons }
      />
      <ListAll persons={ filteredPersons } />
    </div>
  )
}

export default App