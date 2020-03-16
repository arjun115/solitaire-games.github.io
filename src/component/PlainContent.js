import React from 'react'
import './plainContent.css'

export default ({ children }) => {
    children = children ? children : []
    return (
        <div className="plain-content">{children}</div>
    )
}