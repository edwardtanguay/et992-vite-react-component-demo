interface IProps {
	title: string;
	imageFile: string;
	body: string;
	stars: number;
}

export const ImageBox = ({title, imageFile, body, stars } : IProps) => {
	stars = stars > 5 ? 5 : stars;
	return (
		<div className="bg-orange-300 p-4">
			<h2 className="mb-2 text-2xl">{title} {'*'.repeat(stars)}</h2>
			<div className="flex gap-4">
				<img src={`images/${imageFile}`} />
				<p>{body}</p>
			</div>
		</div>
	);
};
