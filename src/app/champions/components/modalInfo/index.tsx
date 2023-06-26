import React, { useEffect, useState } from 'react'
import { Modal, Text } from '@nextui-org/react'
import Image from 'next/image'

interface ModalInfoProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  name: string
}

const imageLoader = ({ src }: any) => {
  return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${src}_0.jpg`
}

export default function ModalInfo({
  name,
  visible,
  setVisible,
}: ModalInfoProps) {
  const closeHandler = () => {
    setVisible(false)
  }

  const [infomation, setInformation] = useState<object[]>([])

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${name}.json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setInformation(Object.values(data.data))
      })
  }, [name])

  return (
    <>
      {infomation.map((champ: any) => (
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          width="600px"
          open={visible}
          onClose={closeHandler}
          key={champ.name}
          className="border-zinc-200 dark:bg-slate-900"
        >
          <Modal.Header>
            <Text
              id="modal-title"
              size={18}
              b
              className="text-zinc-900 dark:text-zinc-100"
            >
              {champ.name}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text
              size={14}
              className="text-justify text-zinc-900 dark:text-zinc-100"
            >
              {champ.lore}
            </Text>
            <div className="">
              <Image
                loader={imageLoader}
                loading="eager"
                src={champ.id}
                width={600}
                height={300}
                alt={champ.name}
                className="mb-3 "
              />
            </div>
          </Modal.Body>
        </Modal>
      ))}
    </>
  )
}
