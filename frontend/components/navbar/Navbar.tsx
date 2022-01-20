import React from 'react';

const Navbar = () => {
  return <div style={{display: "flex", justifyContent:"space-between", borderBottom:'3px solid #4470C7'}}>
        <p style={{fontWeight:'500', fontSize:'22px', fontStyle:'underline'}}>Controle de Estoque</p>
        <button style={{border: 'none', padding: '0', margin:'0', backgroundColor:'transparent', cursor:'pointer'}}><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10V38C8 38.5304 8.21071 39.0391 8.58579 39.4142C8.96086 39.7893 9.46957 40 10 40H18C19.1046 40 20 40.8954 20 42C20 43.1046 19.1046 44 18 44H10C8.4087 44 6.88258 43.3679 5.75736 42.2426C4.63214 41.1174 4 39.5913 4 38V10C4 8.4087 4.63214 6.88258 5.75736 5.75736C6.88258 4.63214 8.4087 4 10 4H18C19.1046 4 20 4.89543 20 6C20 7.10457 19.1046 8 18 8H10ZM30.5858 12.5858C31.3668 11.8047 32.6332 11.8047 33.4142 12.5858L43.4142 22.5858C44.1953 23.3668 44.1953 24.6332 43.4142 25.4142L33.4142 35.4142C32.6332 36.1953 31.3668 36.1953 30.5858 35.4142C29.8047 34.6332 29.8047 33.3668 30.5858 32.5858L37.1716 26H18C16.8954 26 16 25.1046 16 24C16 22.8954 16.8954 22 18 22H37.1716L30.5858 15.4142C29.8047 14.6332 29.8047 13.3668 30.5858 12.5858Z" fill="#4470C7"/>
</svg></button>
        

  </div>;
};

export default Navbar;