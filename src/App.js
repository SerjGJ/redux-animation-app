import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addElement, removeElement } from './features/elementsSlice'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const elements = useSelector((state) => state.elements)

  const handleAdd = () => {
    dispatch(addElement())
  }

  const handleRemove = () => {
    dispatch(removeElement())
  }

  return (
    <div className="App">
      <button onClick={handleAdd}>Добавить</button>
      <button onClick={handleRemove}>Удалить</button>
      <div className="element-list">
        <AnimatePresence initial={false}>
          {elements.map((element, index) => (
            <motion.div
              key={element.id}
              className="element"
              style={{ backgroundColor: element.color }}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
