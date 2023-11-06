import { IPlayerResult } from "../interfaces";

interface IProps {
	playerResult: IPlayerResult
}
export const ScoreCard = ({playerResult}: IProps) => {
	return (
		<div className="flex flex-col bg-green-400 w-[7rem] p-3 items-center justify-center rounded border border-gray-600 mt-4">
			<p className="font-bold">{playerResult.name}</p>
			<p>{playerResult.score}</p>
		</div>
	);
};
