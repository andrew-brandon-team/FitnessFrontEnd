import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// import Components for paths
import App from './components/App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import Activities from './components/Activities';
import ActivityDetails from './components/ActivityDetails';
import AddActivity from './components/AddActivity';

import Routines from './components/Routines';
import RoutineDetails from './components/RoutineDetails';
import RoutineEdit from './components/RoutineEdit';
import RoutineAdd from './components/RoutineAdd';

const appElement = document.getElementById('app');
const root = createRoot(appElement);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "activities",
        element: <Activities />
      },
      {
        path: "activity-details",
        element: <ActivityDetails />
      },
      {
        path: "add-activity",
        element: <AddActivity />
      },
      {
        path: "routines",
        element: <Routines />
      },
      {
        path: "routine-details",
        element: <RoutineDetails />
      },
      {
        path: "edit-routine",
        element: <RoutineEdit />
      },
      {
        path: "add-routine",
        element: <RoutineAdd />
      }
    ]
  }
])

root.render(<RouterProvider router = {router} />);