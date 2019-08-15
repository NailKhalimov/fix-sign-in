import './style.scss';
import Login from './pages/Login/Login';

const application = document.getElementById('app') as HTMLElement;
Login()(application);