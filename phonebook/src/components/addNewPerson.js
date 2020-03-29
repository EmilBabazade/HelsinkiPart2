import React from 'react'

const AddNew = ({
    name, 
    phoneNumber, 
    phoneNumSetter, 
    nameSetter, 
    personsSetter,
    persons
}) => {
    // TODO: add handler for submit button that adds a new person to persons - done
    // TODO: change so phone numbers can be added - done
    const addPerson = ( event ) => {
        //not submitting anywhere
        event.preventDefault()
        let newPerson = { name: name, number: phoneNumber }
        try {
            validatePerson( newPerson, persons )
            personsSetter( persons.concat( newPerson ) )
            nameSetter( '' )
            phoneNumSetter( 0 )
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
    const handlePhoneNumberChange = ( event ) => phoneNumSetter( event.target.value )
    
    // TODO: add handler for change on the input box 
    // that changes the value of the input box and newName - done
    const handleNameChange = ( event ) => nameSetter( event.target.value )
    
    return(
        <div>
            <form>
                <div>
                    <h2>add a new</h2>
                    name: <input value={ name } onChange={ handleNameChange } />
                    <br/>
                    number: <input value={ phoneNumber } onChange={ handlePhoneNumberChange } />
                </div>
                <div>
                    <button type="submit" onClick={ addPerson }>add</button>
                </div>
            </form>
        </div>
    );
}

// helper function, i use variable function definitions for components
// and normal function definition for anything else
// it just seperates them nicely 
function validatePerson( newPerson, persons ) {
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

export default AddNew