import { Routes, Route } from 'react-router-dom';
import App from '../App';
import { DetailA } from '../components/DetailA';
import { Page1 } from '../components/Page1';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='page1' element={<Page1 />}>
            <Route path='detaila' element={<DetailA />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}