import { createSlice } from '@reduxjs/toolkit'

const elementsSlice = createSlice({
  name: 'elements',
  initialState: [],
  reducers: {
    addElement: (state) => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`
      state.unshift({ id: Date.now(), color: randomColor })
    },
    removeElement: (state) => {
      state.pop()
    },
  },
})

export const { addElement, removeElement } = elementsSlice.actions

export default elementsSlice.reducer
