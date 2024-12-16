import React from 'react'

export const Footer = () => {
let footerStyl = {
position:"relative",
top:"100vh",
width:"100%"
}

  return (
    <footer className='bg-dark text-light py-3 text-center' style={footerStyl}>
      Copyright &copy; MyTodosList.com
    </footer>
  )
}
