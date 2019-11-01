import React from 'react'

interface PropsSelect {
  value: string
  source: string[]
  name: string
  empty: boolean
  handleChange: (e: any) => any
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Select({ value, source, name, empty, handleChange }: PropsSelect) {
  return (
    <select
      style={name === 'prod' ? { minWidth: '145px' } : {}}
      id={name}
      className={name === 'hospSci' ? 'italic form-select' : 'form-select'}
      value={value}
      name={name}
      onChange={handleChange}
    >
      {empty && <option value={''} aria-selected="true" />}
      {source.map(option => {
        return (
          <option value={option} key={option} aria-selected="false">
            {option}
          </option>
        )
      })}
    </select>
  )
}
