import React from 'react'

const ListAll = ({ persons }) => {
    return(
        <div>
            <h2>Numbers</h2>
            <ul>
                { persons.map( person => {
                    return <li key={ person.name }>{ person.name } { person.number }</li>
                } ) }
            </ul>
        </div>
    );
}

export default ListAll