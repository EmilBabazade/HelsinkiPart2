import React from 'react'

const List = ({ countries, showButtonHandler }) => {
    return(
        <div>
            <ul>
                { countries.map( (country, index) => 
                    <li key={ country.alpha2Code + country.alpha3Code }>
                        {country.name}
                        <button 
                            onClick={ showButtonHandler }
                            value={ index }>
                            show
                        </button>
                    </li> 
                ) }
            </ul>
        </div>
    )
}

export default List