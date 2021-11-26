import React from 'react'

interface Props {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const Button: React.FC<Props> = props => {
    return (
        <div className="cursor-pointer select-none" onClick={props.onClick}>
            <div className="flex flex-col bg-blue-500 hover:bg-blue-400 rounded px-4 py-2">
                <div className="flex justify-center items-center text-white">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Button
