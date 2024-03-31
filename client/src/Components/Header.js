import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate();
	return (
		<div className="title" onClick={() => {
			navigate('/');
		}}>
			<span className="nortonn-recipes">nortonn recipes</span>
		</div>
	);
}

export default Header;