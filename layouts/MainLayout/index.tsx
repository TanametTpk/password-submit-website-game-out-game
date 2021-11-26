import React from 'react'

interface Props {
    
}

const MainLayout: React.FC<Props> = props => {
    return (
        <div className="min-h-screen min-w-full flex flex-col justify-center items-center">
            {props.children}
        </div>
    )
}

export default MainLayout
