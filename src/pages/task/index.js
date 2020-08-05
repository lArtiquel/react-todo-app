import React from 'react'
import { Typography } from '@material-ui/core'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import TransitionAlert from '../../components/TransitionAlert'
import TodoInput from '../../components/TodoInput'
import GithubLogo from '../../components/GithubLogo'

const TaskPage = () => {
  return (
    <Container>
      <Header
        leftContent={
          <Typography variant="h4">Welcome to Arti's todo app!</Typography>
        }
        rightContent={
          <a href="https://github.com/lartiquel/react-todo-app">
            <GithubLogo />
          </a>
        }
      />
      <TodoInput my={3} />
      <TransitionAlert my={2} content="Task deleted!" />
      <Tabs my={2} />
    </Container>
  )
}

export default TaskPage
