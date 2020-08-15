import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import TransitionAlert from '../../components/TransitionAlert'
import TodoInput from '../../components/TodoInput'
import AppLogo from '../../components/AppLogo'
import GitHubLogoLink from '../../components/GitHubLogoLink'

const TaskPage = () => {
  return (
    <Container>
      <Header leftContent={<AppLogo />} rightContent={<GitHubLogoLink />} />
      <TodoInput my={3} />
      <TransitionAlert my={2} content="Task deleted!" />
      <Tabs my={2} />
    </Container>
  )
}

export default TaskPage
