import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer style={{
      width: '100%',
      height: '100px',
      marginTop: '70px',
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center'
    }}>
      <i className="fab fa-instagram fa-lg mx-3"> Store</i>
      <i className="fab fa-facebook fa-lg mx-3"> Store Chile</i>
  </footer>
  )
}

export default Footer
