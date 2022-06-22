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
import MainWrapper from '../MainWrapper';

function AppRoutes() {
    return (
        <Routes>
            {/* public routes */}
            <Route path='/login' element={
                <UnauthenticatedRoute>
                    <MainWrapper>
                        <LoginPage />
                    </MainWrapper>
                </UnauthenticatedRoute>
            } />
            <Route path='/register' element={
                <UnauthenticatedRoute>
                    <MainWrapper>
                        <RegisterPage />
                    </MainWrapper>
                </UnauthenticatedRoute>
            } />
            <Route path='/' element={
                <UnauthenticatedRoute>
                    <MainWrapper>
                        <SelectCityPage />
                    </MainWrapper>
                </UnauthenticatedRoute>
            } />
            <Route path='/:city_url' element={
                <UnauthenticatedRoute>
                    <MainWrapper>
                        <RestaurantsPage />
                    </MainWrapper>
                </UnauthenticatedRoute>
            } />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;