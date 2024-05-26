import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {

            }
        ]
    }
])

export default route;