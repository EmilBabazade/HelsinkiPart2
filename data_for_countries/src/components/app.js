import React, { useState, useEffect } from 'react'
import axios from 'axios'
import websites from './websites'
import FilterSearch from './filterSearch'
import ListCountries from './listCountreis'

const App = () => {
    const [ countries, setCountries ] = useState({
        countries: [],
        filteredCountries: [],
        isReadyToFilter: false
    })

    // TODO: get all countries
    useEffect( () => {
        axios
            .get( websites.ALL )
            .then( response => {
                // console.log(response.data) // debug
                setCountries({
                    countries: [...response.data],
                    filteredCountries: [],
                    isReadyToFilter: true
                })
            } )
    }, [])

    return(
        <div>
            <FilterSearch 
                countries={ countries }
                countriesSetter={ setCountries }
            />
            <ListCountries 
                countries={ countries }
                countriesSetter={ setCountries }
            />
        </div>
    )
}

export default App