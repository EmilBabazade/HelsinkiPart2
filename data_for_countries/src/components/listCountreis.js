import React from 'react'
import Country from './country'

const ListCountries = ( { countries } ) => {
    let showThis = ( <div> </div> )
    if( countries.length > 10 ) {
        showThis = (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        ) 
    } else if ( countries.length > 1 && countries.length < 10 ) {
        showThis = (
            <div>
                <ul>
                    { countries.map( country => 
                        <li key={ country.alpha2Code + country.alpha3Code }>
                            {country.name}
                        </li> 
                    ) }
                </ul>
            </div>
        ) 
    } else if ( countries.length === 1 ) {
        let onlyCountry = countries.pop()
        onlyCountry = {
            name: onlyCountry.name,
            capital: onlyCountry.capital,
            population: onlyCountry.population,
            languages: onlyCountry.languages,
            flag: onlyCountry.flag
        }
        showThis = (
            <div>
                <Country 
                    country={ onlyCountry }
                />
            </div>
        ) 
    }

    return showThis
}   

export default ListCountries