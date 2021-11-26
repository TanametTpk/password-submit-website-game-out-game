import {atom} from 'jotai'
import { RoomPasswordMapping } from '../components/PasswordList'

const buildRooms = (roomCharacter: string): string[] => {
  return roomCharacter
    .split("")
    .map((shortName: string) => "Room " + shortName)
}

const mockRoomPasswordMapping = (roomNames: string[]): RoomPasswordMapping[] => {
    return roomNames.map((roomName) => {
      return {
        room: roomName,
        hash: "",
        value: ""
      }
    })
}

let roomNames = buildRooms("XBEULFVJOHCSAR")
roomNames.push("Room Bonus")

const roomAtom = atom<RoomPasswordMapping[]>(
  mockRoomPasswordMapping(
    roomNames
  )
)

export default roomAtom