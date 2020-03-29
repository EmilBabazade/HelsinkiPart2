import React from 'react'

const AddNew = ({name, phoneNumber, nameChangeHandler, phoneNumberChangeHandler, submitHandler}) => {
    return(
        <div>
            <form>
                <div>
                    <h2>add a new</h2>
                    name: <input value={ name } onChange={ nameChangeHandler } />
                    <br/>
                    number: <input value={ phoneNumber } onChange={ phoneNumberChangeHandler } />
                </div>
                <div>
                    <button type="submit" onClick={ submitHandler }>add</button>
                </div>
            </form>
        </div>
    );
}

export default AddNew