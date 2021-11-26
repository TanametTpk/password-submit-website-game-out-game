import { useAtom } from 'jotai'
import React from 'react'
import roomAtom from '../../states/roomAtom'
import InputField from '../InputField'

export interface RoomPasswordMapping {
    room: string
    hash: string
    value: string
}

interface Props {
    pairs: RoomPasswordMapping[]
}

const PasswordList = ({ pairs }: Props) => {
    const [rooms, setRooms] = useAtom(roomAtom)

    const updatePassword = (pair: RoomPasswordMapping ,e: React.ChangeEvent<HTMLInputElement>) => {
        const newRoomsState = rooms.map(roomItem => {
            if (roomItem.room === pair.room)
                roomItem.value = e.target.value

            return roomItem
        })

        setRooms(newRoomsState)
    }

    return (<div>
        {
            pairs.map((pair, key) => {
                return <InputField
                    key={key}
                    title={pair.room}
                    value={pair.value}
                    placeholder={"Enter password of " + pair.room}
                    onChange={(e) => updatePassword(pair, e)}
                />
            })
        }
    </div>)
}

export default PasswordList
