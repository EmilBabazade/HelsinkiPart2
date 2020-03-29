import React, { useState } from 'react'
import AddNew from './addNewPerson'
import ListAll from './listAllPeople'
import SearchFilter from './searchFilter'

// TODO: exercise 2.9*: The Phonebook Step4


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState( 0 )
  const [ filteredPersons, SetFilteredPersons ] = useState( persons )

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