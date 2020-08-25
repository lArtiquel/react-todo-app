import React from 'react'
import Container from '../../Container'
import Header from '../../Header'
import Tabs from './Tabs'
import TransitionAlert from './TransitionAlert'
import TodoInput from './TodoInput'
import AppLogo from '../../AppLogo'
import GitHubLogoLink from '../../GitHubLogoLink'

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
