import React from 'react'

export const List = ({admins}) => {
    
    return admins.map(book=>(
        
        <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
                    
        </tr>            
    
))
}