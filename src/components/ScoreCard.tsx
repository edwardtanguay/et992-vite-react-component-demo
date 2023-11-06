import { useState } from 'react';
import { IPlayerResult } from "../interfaces";

interface IProps {
	playerResult: IPlayerResult
}
export const ScoreCard = ({playerResult}: IProps) => {
	const [isInvited, setIsInvited] = useState(false);

	return (
		<div className="flex flex-col bg-green-400 w-[7rem] p-3 items-center justify-center rounded border border-gray-600 mt-4">
			<p className="font-bold">{playerResult.name}{isInvited && '*'}</p>
			<p>{playerResult.score}</p>
			<button onClick={() => setIsInvited(!isInvited)}>invited</button>
			<button className='mt-2'>favorite</button>
		</div>
	);
};
