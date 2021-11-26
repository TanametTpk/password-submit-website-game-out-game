import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import MainLayout from '../layouts/MainLayout'
import Button from '../components/Button'
import InputField from '../components/InputField'
import { Typography, Modal } from 'antd';
import PasswordList from '../components/PasswordList'
import { useAtom } from 'jotai'
import roomAtom from '../states/roomAtom'
import { useState } from 'react'
import extractPassword from '../core/extractPassword'

const { Title } = Typography;

const Home: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [keyPhrase, setKeyPhrase] = useState<string>("")
  const [rooms, setRooms] = useAtom(roomAtom)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showKeyPhrase = () => {
    setKeyPhrase(extractPassword(rooms))
    showModal()
  }

  return (
    <div className="min-h-screen min-w-full bg-gradient-to-br from-green-400 to-blue-500">
      <MainLayout>
        <Title style={{color: "white", textAlign: "center"}}>
          Nice, Show Me da Password Dude!!
        </Title>
        <div className="w-96 sm:flex-none flex-1 sm:m-0 m-4">
          <Card>
            <div className="flex flex-col space-y-2">
              <PasswordList pairs={rooms} />

              <Button onClick={showKeyPhrase}>
                Submit Password
              </Button>
            </div>
          </Card>
        </div>

        <Modal title="This is your Reward, Get it!! you sun of a beach!!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Wallet: MetaMask</p>
          <p>Chain: BSC</p>
          <p>Token: ...</p>
          <p>secret recovery phrase: {keyPhrase}</p>
        </Modal>
      </MainLayout>
    </div>
  )
}

export default Home
