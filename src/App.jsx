/** @format */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Notification from './components/Notification';
import Register from './components/Register';
import User from './components/User';
import UserModifier from './components/UserModifier';
import Users from './components/Users';
import Auth from './components/Auth';
import Order from './components/Order';
import Orders from './components/Orders';
import Products from './components/Products';
import Product from './components/Product';
import ProductModifier from './components/ProductModifier';
import Finder from './components/Finder';
import { getOrder } from './redux/actionCreators/ordersActions';
import { getProduct } from './redux/actionCreators/productsActions';
import { getUser } from './redux/actionCreators/usersActions';
import { initApp } from './redux/actionCreators/appActions';
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initApp());
	}, []);
	return (
		<div data-testid='app-component'>
			<Navbar />
			<div className='col-md-12 text-center'>
				<Notification />
			</div>
			
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/product' element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path="/login" element={<Auth authRoles={['guest']} />}>
					<Route path="" element={<Login />} />
				</Route>
				<Route path="/register" element={<Auth authRoles={['guest']} />}>
					<Route path="" element={<Register />} />
				</Route>
			</Routes>

			<footer className='text-center'>
				<p>Copyright &copy; 2022</p>
			</footer>
		</div>
	);
};

export default App;
