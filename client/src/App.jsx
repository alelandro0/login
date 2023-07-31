import {BrowserRouter,Routes,Route}  from  'react-router-dom'
import LoginPage from './pages/loginPage.jsx'
import RegisterPage from './pages/registerPage.jsx'
function App(){
  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<h1>Home Page</h1>}/>
    <Route path='/Register'element={<RegisterPage/>}/>
    <Route path='/Login'element={<LoginPage/>}/>
    <Route path='/Task'element={<h1>Task Page</h1>}/>
    <Route path='/Add-task' element={<h1>New Task</h1>}/>
    <Route path='/Task/:id' element={<h1>Update Task</h1>}/>
    <Route path='/Profile' element={<h1>Profile</h1>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App