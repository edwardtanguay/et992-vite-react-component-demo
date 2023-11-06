import { FaGrinStars } from 'react-icons/fa';

interface IProps {
	stars: number;
}

export const Stars = ({ stars }: IProps) => {

	const starItems = [];
	for (let i = 0; i < stars; i++) {
		starItems.push(<FaGrinStars />);
	}

	return <div className='flex gap-1 mt-1 mb-3'>{starItems}</div>
};
