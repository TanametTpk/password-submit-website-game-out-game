import { Input } from 'antd'
import React from 'react'
import { Typography } from 'antd';

const { Title } = Typography;

interface Props {
    placeholder?: string
    title?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    [key: string]: any
}

const InputField: React.FC<Props> = ({ placeholder, title, ...props }) => {
    return (
        <div className="flex flex-col ">
            <p> {title} </p>
            <div className="flex flex-col bg-gray-200 rounded p-4 shadow-sm relative">
                <Input
                    style={{color:"black"}}
                    type="password"
                    placeholder={placeholder}
                    bordered={false}
                    {...props}
                />
            </div>
        </div>
    )
}

export default InputField
