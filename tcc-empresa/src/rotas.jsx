import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Empresa from './landingpage'


export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/teste" element={<App/>}/>
                <Route path="/" element={<Empresa/>}/>
        
            </Routes>
        </BrowserRouter>
    )
}