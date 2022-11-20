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
import ActivityEdit from './components/ActivityEdit';
import AddActivity from './components/AddActivity';

import Routines from './components/Routines';
import RoutineDetails from './components/RoutineDetails';
import RoutineEdit from './components/RoutineEdit';
import RoutineAdd from './components/RoutineAdd';
import RoutinesMy from './components/RoutinesMy';

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
        path: "activity/:id",
        element: <ActivityDetails />
      },
      {
        path: "activity/:id/edit-activity",
        element: <ActivityEdit />
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
        path: "routines/:id",
        element: <RoutineDetails />


      },
      // {
      //   path: "routine/:id",
      //   element: <RoutineDetails />
      // },
      {
        path: "routines/:id/edit-routine",
        element: <RoutineEdit />
      },
      {
        path: "my-routines/:id/edit-routine",
        element: <RoutineEdit />
      },
      {
        path: "add-routine",
        element: <RoutineAdd />
      },
      {
        path: "my-routines",
        element: <RoutinesMy />,
      },
      {
        path: "my-routines/:id",
        element: <RoutineDetails />
      }
      // {
      //   path: "delete-routine",
      //   element: <RoutineDelete />
      // }
    ]
  }
])

root.render(<RouterProvider router = {router} />);