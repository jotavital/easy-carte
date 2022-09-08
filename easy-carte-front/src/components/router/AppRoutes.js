import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import SelectCityPage from '../pages/SelectCityPage';
import PageNotFound from '../pages/PageNotFound';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import RestaurantsListPage from '../pages/RestaurantsListPage';
import MainWrapper from '../MainWrapper';
import RestaurantPage from './../pages/RestaurantPage';
import WhereAreYou from '../sections/WhereAreYou';

function AppRoutes() {
    return (
        <Routes>
            {/* unauthenticated-only routes */}
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

            {/* public routes */}
            <Route path='/' element={
                <MainWrapper>
                    <SelectCityPage />
                </MainWrapper>
            } />
            <Route path='/:city_url' element={
                <MainWrapper>
                    {/* <RestaurantsListPage /> */}
                    <WhereAreYou />
                </MainWrapper>
            } />

            {/* Restaurant routes */}
            <Route path='/restaurants/:restaurant_id/products' element={
                <MainWrapper>
                    <RestaurantPage />
                </MainWrapper>
            } />

            <Route path="*" element={<PageNotFound />} />

            {/* private routes */}
        </Routes>
    );
}

export default AppRoutes;