import React, { useState } from 'react'

const FilterSearch = ({
    countries,
    countriesSetter,
}) => {
    const [ filter, setFilter ] = useState('')  

    const filterCountries = ( event ) => {
        let newFilter = event.target.value
        setFilter( newFilter )
        // start filtering only if we have all the data
        // and filter text
        if( countries.isReadyToFilter && newFilter ) {
            let newFilteredCoutnries = countries
                .countries
                .filter(
                country => country
                    .name
                    .toLowerCase()
                    .startsWith( newFilter.toLowerCase() )
            )
            countriesSetter( {
                countries: [ ...countries.countries ],
                filteredCountries: newFilteredCoutnries,
                isReadyToFilter: true
            } )
        }
    }

    return(
        <>
            find countries <input 
                value={ filter } 
                onChange = { filterCountries } 
                />  
        </>
    )
}

export default FilterSearch