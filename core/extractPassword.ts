import { RoomPasswordMapping } from "../components/PasswordList"

const getCharacterFrom = (pairs: RoomPasswordMapping[], roomName: string, index: number): string => {
    let targetPair = pairs.filter(pair => pair.room == "Room " + roomName)
    if (targetPair.length < 1) return "not found room"

    let pair = targetPair[0]
    if (pair.value.length <= index) return ""

    return pair.value[index]
}

const extractPassword = (pairs: RoomPasswordMapping[]): string => {
    let keyPhrase: string = ""
    if (pairs.length < 15) return ""

    keyPhrase += getCharacterFrom(pairs, "X", 1)
    keyPhrase += getCharacterFrom(pairs, "L", 2)
    keyPhrase += getCharacterFrom(pairs, "F", 1)
    keyPhrase += getCharacterFrom(pairs, "Bonus", 1)
    keyPhrase += getCharacterFrom(pairs, "U", 3)
    keyPhrase += getCharacterFrom(pairs, "S", 11)
    keyPhrase += getCharacterFrom(pairs, "E", 13)
    keyPhrase += getCharacterFrom(pairs, "R", 22)
    keyPhrase += getCharacterFrom(pairs, "J", 8)
    keyPhrase += getCharacterFrom(pairs, "R", 0)
    keyPhrase += getCharacterFrom(pairs, "U", 7)
    keyPhrase += getCharacterFrom(pairs, "V", 2)
    keyPhrase += getCharacterFrom(pairs, "V", 0)
    keyPhrase += getCharacterFrom(pairs, "X", 6)
    keyPhrase += getCharacterFrom(pairs, "X", 6)
    keyPhrase += getCharacterFrom(pairs, "R", 1)
    keyPhrase += getCharacterFrom(pairs, "R", 8)
    keyPhrase += getCharacterFrom(pairs, "X", 2)
    keyPhrase += getCharacterFrom(pairs, "R", 3)
    keyPhrase += getCharacterFrom(pairs, "R", 5)
    keyPhrase += getCharacterFrom(pairs, "R", 5)
    keyPhrase += getCharacterFrom(pairs, "R", 26)
    keyPhrase += getCharacterFrom(pairs, "X", 7)
    keyPhrase += getCharacterFrom(pairs, "R", 33)
    keyPhrase += getCharacterFrom(pairs, "U", 7)
    keyPhrase += getCharacterFrom(pairs, "A", 12)
    keyPhrase += getCharacterFrom(pairs, "U", 6)
    keyPhrase += getCharacterFrom(pairs, "S", 6)
    keyPhrase += getCharacterFrom(pairs, "S", 2)
    keyPhrase += getCharacterFrom(pairs, "R", 13)
    keyPhrase += getCharacterFrom(pairs, "J", 19)
    keyPhrase += getCharacterFrom(pairs, "R", 11)
    keyPhrase += getCharacterFrom(pairs, "S", 2)
    keyPhrase += getCharacterFrom(pairs, "E", 8)
    keyPhrase += getCharacterFrom(pairs, "O", 1)
    keyPhrase += getCharacterFrom(pairs, "O", 4)
    keyPhrase += getCharacterFrom(pairs, "J", 10)
    keyPhrase += getCharacterFrom(pairs, "A", 6)
    keyPhrase += getCharacterFrom(pairs, "X", 10)
    keyPhrase += getCharacterFrom(pairs, "R", 13)
    keyPhrase += getCharacterFrom(pairs, "R", 16)
    keyPhrase += getCharacterFrom(pairs, "U", 7)
    keyPhrase += getCharacterFrom(pairs, "J", 20)
    keyPhrase += getCharacterFrom(pairs, "R", 2)
    keyPhrase += getCharacterFrom(pairs, "R", 25)
    keyPhrase += getCharacterFrom(pairs, "J", 15)
    keyPhrase += getCharacterFrom(pairs, "X", 5)
    keyPhrase += getCharacterFrom(pairs, "R", 46)
    keyPhrase += getCharacterFrom(pairs, "X", 21)
    keyPhrase += getCharacterFrom(pairs, "L", 5)
    keyPhrase += getCharacterFrom(pairs, "B", 6)
    keyPhrase += getCharacterFrom(pairs, "R", 29)
    keyPhrase += getCharacterFrom(pairs, "O", 8)
    keyPhrase += getCharacterFrom(pairs, "A", 9)
    keyPhrase += getCharacterFrom(pairs, "R", 30)
    keyPhrase += getCharacterFrom(pairs, "E", 11)
    keyPhrase += getCharacterFrom(pairs, "J", 3)
    keyPhrase += getCharacterFrom(pairs, "L", 17)
    keyPhrase += getCharacterFrom(pairs, "U", 2)
    keyPhrase += getCharacterFrom(pairs, "R", 22)
    keyPhrase += getCharacterFrom(pairs, "V", 10)
    keyPhrase += getCharacterFrom(pairs, "U", 5)
    keyPhrase += getCharacterFrom(pairs, "R", 17)
    keyPhrase += getCharacterFrom(pairs, "S", 6)
    keyPhrase += getCharacterFrom(pairs, "J", 4)
    keyPhrase += getCharacterFrom(pairs, "O", 10)
    keyPhrase += getCharacterFrom(pairs, "J", 10)
    keyPhrase += getCharacterFrom(pairs, "R", 34)
    keyPhrase += getCharacterFrom(pairs, "R", 22)
    keyPhrase += getCharacterFrom(pairs, "J", 2)
    keyPhrase += getCharacterFrom(pairs, "R", 20)
    keyPhrase += getCharacterFrom(pairs, "V", 3)
    keyPhrase += getCharacterFrom(pairs, "L", 2)
    keyPhrase += getCharacterFrom(pairs, "O", 3)
    keyPhrase += getCharacterFrom(pairs, "H", 0)
    keyPhrase += getCharacterFrom(pairs, "O", 8)

    return keyPhrase.toLowerCase()
}

export default extractPassword