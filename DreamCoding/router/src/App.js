
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import Root from './pages/Root';
import Home from './pages/Home';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/videos', element: <Videos /> },
      { path: '/videos/:videoId', element: <VideoDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
  
}

export default App;
