'use client'

import React, { useEffect, useState } from 'react'
import { Modal, Text } from '@nextui-org/react'

interface ModalInfoProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  name: string
}

export default function ModalInfo({
  visible,
  name,
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
          open={visible}
          onClose={closeHandler}
          key={champ.name}
          className="bg-slate-200 dark:bg-slate-800"
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
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      ))}
    </>
  )
}
