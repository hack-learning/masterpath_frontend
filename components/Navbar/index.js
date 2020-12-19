// import Libraries
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import Components
import { Expbar } from '../Expbar';
import { gravatar } from '../../utils/gravatar';
import { login } from '../../redux/actions/userActions';

// import Styles
import { NavbarContainer, NavbarImage, NavbarList } from './styles';

// ---------- COMPONENT ---------- //
export const Navbar = () => {
	const { route } = useRouter();
	const dispatch = useDispatch();
	const { name, email, lv } = useSelector((state) => state.userState);

	useEffect(() => {
		dispatch(login());
	}, []);

	return (
		<NavbarContainer>
			<NavbarImage>
				<img src={gravatar(email)} alt={name} />
				<Expbar />
				<h3>{name}</h3>
				<p>
					Lv: <span>{lv}</span> / 50
				</p>
			</NavbarImage>
			<NavbarList>
				<Link href="/master-path">
					<li className={route === '/master-path' ? 'active' : null}>
						Master Path
					</li>
				</Link>
				<Link href="/bug-hunt">
					<li className={route === '/bug-hunt' ? 'active' : null}>Bug Hunt</li>
				</Link>
				<Link href="/library">
					<li className={route === '/library' ? 'active' : null}>Library</li>
				</Link>
				<a target="_blank" href="https://master.platzi.com/dashboard/calendar">
					<li>This Week</li>
				</a>
				<a target="_blank" href="https://master.platzi.com/dashboard/schedule">
					<li>Office Hours</li>
				</a>
				<a
					target="_blank"
					href="https://master.platzi.com/dashboard/appointments"
				>
					<li>Appointments</li>
				</a>
			</NavbarList>
			<button>Logout</button>
		</NavbarContainer>
	);
};
