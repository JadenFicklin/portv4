import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="absolute">
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/archive">
        <p>Archive</p>
      </Link>
    </div>
  )
}
