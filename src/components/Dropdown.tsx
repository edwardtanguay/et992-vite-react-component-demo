interface IProps {
	choices: string[];
}

export const Dropdown = ({ choices } : IProps) => {
	return (
		<p>{choices.length}</p>
	)
}