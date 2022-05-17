import {
    Routes,
    Route
} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';

function AppRoutes() {

    return (
        <Routes>
            <Route path='/login' element={
                <UnauthenticatedRoute>
                    <Login />
                </UnauthenticatedRoute>
            } />
            <Route path='/register' element={
                <UnauthenticatedRoute>
                    <Register />
                </UnauthenticatedRoute>
            } />
            <Route path='/home' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;