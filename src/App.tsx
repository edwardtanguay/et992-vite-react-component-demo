import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
	return (
		<>
			<Header />
			<p>Welcome to this site.</p>
			<div className="bg-orange-300 p-4">
				<h2 className="mb-2 text-2xl">title</h2>
				<div className="flex gap-4">
					<img src="images/city.png" />
					<p>body</p>
				</div>
			</div>
			<Footer />
		</>
	);
};
