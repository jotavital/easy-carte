import {
    Routes,
    Route
} from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SelectCityPage from '../pages/SelectCityPage';
import PageNotFound from '../pages/PageNotFound';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import RestaurantsPage from '../pages/RestaurantsPage';

function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
            <Route path='/login' element={
                <UnauthenticatedRoute>
                    <LoginPage />
                </UnauthenticatedRoute>
            } />
            <Route path='/register' element={
                <UnauthenticatedRoute>
                    <RegisterPage />
                </UnauthenticatedRoute>
            } />
            <Route path='/' element={
                <UnauthenticatedRoute>
                    <SelectCityPage />
                </UnauthenticatedRoute>
            } />
            <Route path='/:city_url' element={
                <UnauthenticatedRoute>
                    <RestaurantsPage />
                </UnauthenticatedRoute>
            } />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;