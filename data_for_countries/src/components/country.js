import React from 'react'

const Country = ({ country }) => {
    let flagImgAlt = `flag of ${ country.name }`
    return(
        <div>
            <h1>{ country.name }</h1>
            <p>capital { country.capital }</p>
            <p>population { country.population } </p>
            <h1>languages</h1>
            <ul>
                { country.languages.map( 
                    language => 
                        <li key={ language.iso639_1 + language.iso639_2 }>
                            { language.name }
                        </li>
                 ) }
            </ul>
            <img 
                src={ country.flag } 
                alt={ flagImgAlt } 
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '5px',
                    width: '150px'
                }}
            />
        </div>
    )
}

export default Country