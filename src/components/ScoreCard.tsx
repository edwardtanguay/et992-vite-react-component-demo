import { useState } from "react";
import { IPlayerResult } from "../interfaces";

interface IProps {
	playerResult: IPlayerResult;
	setFavorite: (favorite: string) => void;
}
export const ScoreCard = ({ playerResult, setFavorite }: IProps) => {
	const [isInvited, setIsInvited] = useState(false);

	const handleFavoriteChange = () => {
		setFavorite(playerResult.name);
	};

	return (
		<div className="flex flex-col bg-green-400 w-[7rem] p-3 items-center justify-center rounded border border-gray-600 mt-4">
			<p className="font-bold">
				{playerResult.name}
				{isInvited && "*"}
			</p>
			<p>{playerResult.score}</p>
			<button onClick={() => setIsInvited(!isInvited)}>invited</button>
			<button className="mt-2" onClick={handleFavoriteChange}>
				favorite
			</button>
		</div>
	);
};
