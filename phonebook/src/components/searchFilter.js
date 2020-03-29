import React, { useState } from 'react'

const SearchFilter = ({
    filteredPersons,
    filteredPersonsSetter, 
    persons
}) => {
    const [ filter, filterSetter ] = useState( '' )

    //TODO: inputbox onchange handler that updates filter using filterSetter
    //and also updates filteredPersons according to passed filter 
    const filterPersons = (event) => {
        let newFilter = event.target.value 
        filterSetter( newFilter )
        if( newFilter ){
            let newFilteredPersons = filteredPersons.filter( 
                person => person
                    .name
                    .toLowerCase()
                    .startsWith( newFilter.toLowerCase() )
            )
            filteredPersonsSetter( newFilteredPersons )
        } else {
            filteredPersonsSetter( persons )
        }
    }

    //TODO: inputbox for filtered persons - done
    return(
        <div>
            filter shown with 
            <input 
                value={ filter } 
                onChange={ filterPersons } 
            />
        </div>
    );
}

export default SearchFilter