
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import NotFound from './Components/NotFound/NotFound';



function App() {



const routes = createHashRouter([
  { path : "" , element : <LayOut/> , children : [
    { path : "home" , element : <Home/> } ,
    { path : "", element : <Home/> } ,
    { path : "create", element : <Create/> } ,
    { path : "*", element : <NotFound/> } ,
  ] }
])

  return (
  
     
  <RouterProvider router={routes}>   </RouterProvider>

  );
}

export default App;
