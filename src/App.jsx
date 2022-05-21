import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Planets from './routes/planets'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Planets />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
