
import Owner from './owner/owner'
import Admin from './admin/admin'
import './App.css'
import Start from './home/start'
import Guser from './User/user'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
    <BrowserRouter>
       <div className="container-fluid w-100 p-0">
     
        <Routes>

          <Route path="/*" element={<Start/>} />
          <Route path="/owner/*" element={<Owner />} />
          <Route path="/admin/*" element={<Admin/>}/>
          <Route path="/guser/*" element={<Guser/>}/>
        </Routes>
        
        
      
     
       </div>
        </BrowserRouter>
     
        




    </>   
  )
}

export default App;