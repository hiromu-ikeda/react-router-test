import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <div>Homeです</div>
      <Link to='page1'>page1</Link>
      <Outlet />
    </>
  )
}