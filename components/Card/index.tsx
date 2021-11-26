import React from 'react'

interface Props {
    
}

const Card: React.FC<Props> = props => {
    return (
        <div className="flex flex-col bg-white rounded p-4 shadow-lg">
            {props.children}
        </div>
    )
}

export default Card
