import { AppError } from '@utils/AppError'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

import { Container, Content, Icon } from './styles'

import { Alert } from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { groupCreate } from '@storage/group/groupCreate'

export function NewGroup() {
  const [groupInput, setGroupInput] = useState('')

  const navigation = useNavigation()

  async function handleNew() {
    try {
      if (groupInput.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
      }

      await groupCreate(groupInput)
      navigation.navigate('players', { group: groupInput })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível cria um novo grupo.')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova turma'
          subtitle='Crie uma turma para adicionar as pessoas'
        />

        <Input
          placeholder='Nome da turma'
          onChangeText={setGroupInput}
          value={groupInput}
        />

        <Button onPress={handleNew} title='Criar' style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
