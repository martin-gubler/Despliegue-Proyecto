
import Conversacion from './Components/Conversacion'
import data from './data/data'
import { Route, Routes } from 'react-router-dom'
import ListaContactos from './Components/ListaContactos'
import InfoContacto from './Components/InfoContacto'


function App() {
  return (
    <Routes>
      <Route path='/' element = {<ListaContactos data = {data}/>}/>
      <Route path='/conversacion/:id' element={ <Conversacion/>}/>
      <Route path='/infoContacto/:id' element={ <InfoContacto data = {data}/> }/>
    </Routes>
  )
}

export default App
