import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import toast, { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <>
    <RouterProvider router = {router}/>
    <Toaster />
    </>
  )
}

export default App
