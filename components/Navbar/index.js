// import Libraries
import Link from 'next/link';

// import Components
import { Expbar } from '../Expbar';
import { gravatar } from '../../utils/gravatar';

// import Styles
import { NavbarContainer, NavbarImage, NavbarList } from './styles';

// ---------- COMPONENT ---------- //
export const Navbar = () => {
	return (
		<NavbarContainer>
			<NavbarImage>
				<img src={gravatar('jd.garzon12@gmail.com')} alt="" />
				<Expbar />
			</NavbarImage>
			<NavbarList>
				<Link href="/master-path">
					<li>Master Path</li>
				</Link>
				<Link href="/bug-hunt">
					<li>Bug Hunt</li>
				</Link>
				<Link href="/library">
					<li>Library</li>
				</Link>
			</NavbarList>
			<button>Logout</button>
		</NavbarContainer>
	);
};
