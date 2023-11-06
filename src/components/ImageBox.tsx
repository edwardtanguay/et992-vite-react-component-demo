interface IProps {
	title: string;
	imageFile: string;
	body: string;
	stars: number;
	highlighted?: boolean;
}

export const ImageBox = ({
	title,
	imageFile,
	body,
	stars,
	highlighted = false,
}: IProps) => {
	stars = stars > 5 ? 5 : stars;

	const highlight = () => {
		return highlighted ? "bg-yellow-300" : "";
	};

	return (
		<div className={`bg-orange-300 p-4 ${highlight()}`}>
			<h2 className="mb-2 text-2xl">
				{title} {"*".repeat(stars)}
			</h2>
			<div className="flex gap-4">
				<img src={`images/${imageFile}`} />
				<p>{body}</p>
			</div>
		</div>
	);
};
