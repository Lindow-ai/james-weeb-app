import React, { ReactNode } from 'react'

type ButtonType = {
    children: ReactNode
}

const Button: React.FC<ButtonType> = ({children}) => {
    return (
        <button>{children}</button>
    )
}

export default Button