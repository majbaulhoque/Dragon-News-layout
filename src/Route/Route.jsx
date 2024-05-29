import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Career from '../Pages/Career/Career';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import NewsDetails from '../Component/News/NewsDetails';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/Error page/ErrorPage';

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/career',
                element: <Career></Career>,
            },
            {
                path: '/aNews/:id',
                element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
                loader: () => fetch('news.json'),
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
        ]
    }
])

export default route;