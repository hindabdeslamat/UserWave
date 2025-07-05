// ✅ App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddUser from './Composants/AddUser';
import UpdateUser from './Composants/UpdateUser';
import UserList from './Composants/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6 text-center shadow-md">
        <h1 className="text-3xl font-bold">UserWave</h1>
      </header>
      <main className="p-6 max-w-5xl mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<UserList />}  />
            <Route path='/add-user' element={<AddUser />} />
            <Route path='/update-user/:id' element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
