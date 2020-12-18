// import Libraries
import md5 from 'md5';

export const gravatar = (email) => {
	const base = 'https://s.gravatar.com/avatar/';
	const formattedEmail = email.trim().toLoweCase();
	const hash = md5(formattedEmail, { encoding: 'binary' });
	return `${base}${hash}`;
};