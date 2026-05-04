
import { Event } from './pages/Events';
import { Route, Routes } from 'react-router';
import { Clubs } from './pages/Clubs';
import { Profile } from './pages/Profile';
import { Auth } from './pages/Auth';
import {Navbar} from './components/Navbar'

function App() {
  return (
      <div className=' '>
        <Navbar/>
        <div className=''> 
          <Routes>
            <Route path='/' element={<Event/>}/>
            <Route path='/club' element={<Clubs/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/auth' element={<Auth/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
