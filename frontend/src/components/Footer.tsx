import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer style={{
      width: '100%',
      height: '100px',
      backgroundColor: '#343a40',
      color: '#fff',
      textAlign: 'center'
    }}>
      <i className="fab fa-instagram fa-lg mx-3"></i>
      <i className="fab fa-facebook fa-lg mx-3"></i>
      <p>@Store</p>
  </footer>
  )
}

export default Footer
