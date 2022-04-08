function Circle({ children, activeStyle }) {
  return (
    <div className={`circle ${activeStyle ? 'activeStyle' : 'deafultStyle'}`}>
      {children}
    </div>
  )
}

export default Circle
