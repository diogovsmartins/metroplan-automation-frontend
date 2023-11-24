import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ValidateLogin from './components/routeWrapper/RouteWrapper';
import { UserDetailsContext } from './components/context/LoginContext';
import { useState } from 'react';
import RegistrationPage from './pages/login/RegistrationPage';
import AdminPage from './pages/admin/AdminPage';
import DocumentsPage from './pages/documents/DocumentsPage';


function App() {

  const [userRoles, setUserRoles] = useState();

  return (
  <UserDetailsContext.Provider value={{userRoles, setUserRoles}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={ <ValidateLogin /> }/>
          <Route path='/registration' element ={ <RegistrationPage /> }/>
          <Route path='/admin' element ={ <AdminPage /> }/>
          <Route path='/documents' element ={ <DocumentsPage /> }/>
        </Routes>
      </BrowserRouter>
    </UserDetailsContext.Provider>
  );
}

export default App;