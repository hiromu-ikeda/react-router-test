import { Link, Outlet } from 'react-router-dom';

export const Page1 = () => {
  return (
    <>
      <div>Page1です</div>
      <Link to='detaila'>DetailA</Link>
      <Outlet />
    </>
  )
}