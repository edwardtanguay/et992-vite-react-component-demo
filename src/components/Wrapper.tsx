interface IProps {
	title: string;
	children: React.ReactNode;
}
export const Wrapper = ({title, children} : IProps) => {
	return (
		<fieldset className="border border-gray-400 px-4 pb-4 rounded mt-4">
			<legend>{title}</legend>
			<p>{children}</p>
		</fieldset>
	)
}