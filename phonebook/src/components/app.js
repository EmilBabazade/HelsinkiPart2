import React, { useState } from 'react'


// TODO: exercise 2.9*: The Phonebook Step4


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  // TODO: new state for phone number input - done
  const [ newPhoneNumber, setNewPhoneNumber ] = useState(0)

  // helper function, i use variable function definitions for components
  // and normal function definition for anything else
  // it just seperates them nicely 
  function validatePerson( newPerson ) {
    // check if empty
    if( newPerson.name && !isNaN( !newPerson.number ) ){
      // check if name or number already exists
      var nameIsInPersons = persons.some( person => person.name === newPerson.name );
      var phonenNumberIsInPersons = persons.some( person => person.number === newPerson.number );
      if( nameIsInPersons ){
        throw {
          phoneBookException: true,
          userText: `${ newPerson.name } is already in phone book`
        }
      } else if( phonenNumberIsInPersons ) {
        var originalOwner = persons.reduce( ( name, person ) => {
          if( person.number === newPerson.number ) {
            return person.name
          } 
          return name
        }, '' )
        throw {
          phoneBookException: true,
          userText: `Number ${ newPerson.number } belongs to ${ originalOwner }`
        }
      }
      // update the states
    } else {
      throw {
        phoneBookException: true,
        userText: 'None of the fields can be empty!' 
      } 
    }
    
  }

  // TODO: add handler for submit button that adds a new person to persons - done
  // TODO: change so phone numbers can be added - done
  const addPerson = ( event ) => {
    //not submitting anywhere
    event.preventDefault()
    let newPerson = { name: newName, number: newPhoneNumber }
    try {
      validatePerson( newPerson )
      setPersons( persons.concat( newPerson ) )
      setNewName( '' )
      setNewPhoneNumber( 0 )
    } catch (error) {
      if( error.phoneBookException ) { // is a custom exception made in this project
        alert( error.userText )
      } else { // is an internal exception
        throw error
      }
    }
  } 

  // TODO: handler for phone number input onChange
  //that changes the value of the input box and newNumber - done
  const handlePhoneNumberChange = ( event ) => setNewPhoneNumber( event.target.value )

  // TODO: add handler for change on the input box 
  // that changes the value of the input box and newName - done
  const handleNameChange = ( event ) => setNewName( event.target.value )

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          <h2>add a new</h2>
          name: <input value={ newName } onChange={ handleNameChange } />
          <br/>
          number: <input value={ newPhoneNumber } onChange={ handlePhoneNumberChange } />
        </div>
        <div>
          <button type="submit" onClick={ addPerson }>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
          { persons.map( person => {
              return <li key={ person.name }>{ person.name } { person.number }</li>
          } ) }
      </ul>
    </div>
  )
}

export default App