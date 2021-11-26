import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { Typography } from 'antd';
import PasswordList from '../components/PasswordList'
import { useAtom } from 'jotai'
import roomAtom from '../states/roomAtom'

const { Title } = Typography;

const Home: NextPage = () => {

  const [rooms, setRooms] = useAtom(roomAtom)

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-br from-green-400 to-blue-500">
      <MainLayout>
        <Title style={{color: "white", textAlign: "center"}}>
          Nice Show Me da Password Dude!!
        </Title>
        <div className="w-96 sm:flex-none flex-1 sm:m-0 m-4">
          <Card>
            <div className="flex flex-col space-y-2">
              <PasswordList pairs={rooms} />

              <Button onClick={() => { console.log(rooms) }}>
                Click Me
              </Button>
            </div>
          </Card>
        </div>
      </MainLayout>
    </div>
  )
}

export default Home
