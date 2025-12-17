import React from 'react'
import Button from './Button'
const list=[];
const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name='All'/>
      <Button name='Gaming'/>
      <Button name='Songs'/>
      <Button name='News'/>
      <Button name='NBA'/>
      <Button name='Cooking'/>
      <Button name='Songs'/> 
      
    </div>
  )
}

export default ButtonList