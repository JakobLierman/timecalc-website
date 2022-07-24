import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { type UrlObject } from 'url';
import { type IconType } from 'react-icons';

export type TFooterIcon = {
	name: string;
	href: string | UrlObject;
	component: IconType;
};

const iconValues: TFooterIcon[] = [
	// TODO: Enable website in footer
	// {
	// 	name: 'Website',
	// 	href: 'https://jakoblierman.be',
	// 	component: AiFillHome,
	// },
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/jakoblierman/',
		component: AiFillLinkedin,
	},
	{
		name: 'GitHub',
		href: 'https://github.com/JakobLierman',
		component: AiFillGithub,
	},
];

export default iconValues;
