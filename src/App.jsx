import './App.css'
import {Toaster} from 'react-hot-toast'
import 'mdbreact/dist/css/mdb.css';
import UserRoute from './routes/user_route';
import AdminRoute from './routes/admin_route';

function App() {

  return (
    <>
      <Toaster/>

      <UserRoute/>
      <AdminRoute/>
    </>
  )
}

export default App
  