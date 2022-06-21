import {
    Routes,
    Route
} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import SelectCity from '../pages/SelectCity';
import NotFound from '../pages/NotFound';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import Restaurants from '../pages/Restaurants';

function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
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
            <Route path='/' element={
                <UnauthenticatedRoute>
                    <SelectCity />
                </UnauthenticatedRoute>
            } />
            <Route path='/:city_url' element={
                <UnauthenticatedRoute>
                    <Restaurants />
                </UnauthenticatedRoute>
            } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;