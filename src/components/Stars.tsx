interface IProps {
	stars: number;
}

export const Stars = ({ stars }: IProps) => {
	return <>{"*".repeat(stars)}</>;
};
