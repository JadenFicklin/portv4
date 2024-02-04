import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/case-study">
        <p>Case Study</p>
      </Link>
      <Link to="/archive">
        <p>Archive</p>
      </Link>
      <Link to="/asldgjk">
        <p>Error Page</p>
      </Link>
    </>
  )
}
