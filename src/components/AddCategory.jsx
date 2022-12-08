import { useState } from 'react'

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length < 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      ></input>
    </form>
  )
}

export default AddCategory
