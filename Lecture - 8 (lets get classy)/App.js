import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

// function app
function App() {
  return (
    <div className="App">

      <Header/>
      {/* <Body/> t*/}
      <Outlet/>
      <Footer/>

    </div>
  );
}


// define the path with the page




export default App;
