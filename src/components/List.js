import React from 'react'

function List() {
    const array= ['alex','barney','marshell','ted']
    return (
        <div>
             {
                array.map(element => <h2>{element}</h2>)
             }
        </div>
    )
}

export default List

