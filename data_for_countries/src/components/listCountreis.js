import React from 'react'
import Country from './countriesList/one'
import TooManyMatches from './countriesList/tooManyMatches'
import List from './countriesList/list'

const ListCountries = ( { countries, countriesSetter } ) => {
    const showCountry = (event) => {
        event.preventDefault()
        let country = countries.filteredCountries[+event.target.value]
        countriesSetter( {
            countries: [...countries.countries],
            filteredCountries: [country],
            isReadyToFilter: true
        } )
    }
    if( countries.filteredCountries.length > 10 ) {
        return (
            <TooManyMatches />
        )
    } else if ( countries.filteredCountries.length > 1 && countries.filteredCountries.length < 10 ) {
        return(
            <List countries={ countries.filteredCountries } showButtonHandler={ showCountry } />
        )
    } else if ( countries.filteredCountries.length === 1 )   {
        return (
            <div>
                <Country country={ countries.filteredCountries[0] } />
            </div>
        );
    }
    
    return null
}   

export default ListCountries