interface IProps {
	choices: string[];
}

export const Dropdown = ({ choices }: IProps) => {
	return (
		<select className="mt-3 mr-3">
			{choices.map((choice) => {
				return <option value={choice.toLowerCase().replace(' ', '')}>{choice}</option>;
			})}
		</select>
	);
};
