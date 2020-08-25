import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Box, IconButton, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DoneRoundedIcon from '@material-ui/icons/DoneRounded'
import EditRoundedIcon from '@material-ui/icons/EditRounded'
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  ToggleTodoStateAction,
  EditTodoAction,
  ToggleTodoToBeDeletedStateAction
} from '../../../store/actions/taskActions'

const useStyles = makeStyles((theme) => ({
  successColor: {
    color: theme.palette.success.main
  },
  warningColor: {
    color: theme.palette.warning.main
  },
  dangerColor: {
    color: theme.palette.error.main
  },
  crossedTextDecoration: {
    textDecoration: 'line-through',
    color: theme.palette.success.main
  }
}))

const Todo = ({
  id,
  isDone,
  todoBody,
  toggleTodoState,
  editTodo,
  toggleTodoToBeDeletedState
}) => {
  const styles = useStyles()
  const [isEditing, setEditing] = useState(false)
  const [newTodoBody, setNewTodoBody] = useState(todoBody)
  const todoRef = useRef()

  const closeEdit = () => {
    setEditing(false)
    setNewTodoBody(todoBody)
  }

  const handleEditTodoChange = (e) => {
    setNewTodoBody(e.target.value)
  }

  const handleEditTodoButtonClick = () => {
    editTodo(id, newTodoBody)
    setEditing(false)
  }

  const editTodoEnterKeyCallback = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        editTodo(id, newTodoBody)
        setEditing(false)
        e.stopPropagation()
      }
    },
    [newTodoBody, editTodo, id]
  )

  useEffect(() => {
    const currentTodoRef = todoRef.current
    if (isEditing && currentTodoRef)
      currentTodoRef.addEventListener('keyup', editTodoEnterKeyCallback)

    return () => {
      if (isEditing && currentTodoRef)
        currentTodoRef.removeEventListener('keyup', editTodoEnterKeyCallback)
    }
  }, [todoRef, isEditing, editTodoEnterKeyCallback])

  return (
    <Box display="flex" ref={todoRef}>
      {isEditing ? (
        <>
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            value={newTodoBody}
            onChange={handleEditTodoChange}
          />
          <IconButton
            aria-label="cancel"
            className={styles.dangerColor}
            onClick={closeEdit}
          >
            <CloseRoundedIcon />
          </IconButton>
          <IconButton
            aria-label="confirmEdit"
            className={styles.successColor}
            onClick={handleEditTodoButtonClick}
          >
            <DoneRoundedIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <IconButton
              aria-label="do"
              className={styles.successColor}
              onClick={() => toggleTodoState(id)}
            >
              <DoneRoundedIcon />
            </IconButton>
          </Box>
          <Box width="100%" my={2}>
            <Typography
              className={isDone ? styles.crossedTextDecoration : ''}
              variant="body1"
            >
              {todoBody}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <IconButton
              aria-label="edit"
              className={styles.warningColor}
              onClick={() => setEditing(true)}
            >
              <EditRoundedIcon />
            </IconButton>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <IconButton
              aria-label="delete"
              className={styles.dangerColor}
              onClick={() => toggleTodoToBeDeletedState(id)}
            >
              <DeleteOutlineRoundedIcon />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  )
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  todoBody: PropTypes.string.isRequired,
  toggleTodoState: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  toggleTodoToBeDeletedState: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoState: (id) => dispatch(ToggleTodoStateAction(id)),
    editTodo: (id, newTodoContent) =>
      dispatch(EditTodoAction(id, newTodoContent)),
    toggleTodoToBeDeletedState: (todoId) =>
      dispatch(ToggleTodoToBeDeletedStateAction(todoId))
  }
}

export default connect(null, mapDispatchToProps)(Todo)
