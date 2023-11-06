import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ImageBox } from "./components/ImageBox";
import { Dropdown } from "./components/Dropdown";
import * as exampleData from "./exampleData";
import { ScoreCard } from "./components/ScoreCard";
import { Wrapper } from "./components/Wrapper";

export const App = () => {
	return (
		<>
			<Header />
			<p>Welcome to this site.</p>

			<Wrapper title="Image Boxes">
				<ImageBox
					title="Paris Trip"
					imageFile="paris.png"
					body="We had a great time in Paris."
					stars={3}
					highlighted={true}
				/>
				<ImageBox
					title="China Trip"
					imageFile="city.png"
					body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae nisi ratione repellendus dolorum ea officia nam, consequuntur, sunt similique dolores quidem iste voluptates adipisci quam suscipit expedita odio commodi!"
					stars={16}
				/>
			</Wrapper>

			<Wrapper title="Dropdowns">
				<Dropdown choices={exampleData.countries} />
				<Dropdown choices={exampleData.animals} />
			</Wrapper>

			<Wrapper title="Score Cards">
				{exampleData.playerResults.map((playerResult) => {
					return <ScoreCard playerResult={playerResult} />;
				})}
			</Wrapper>

			<Footer />
		</>
	);
};
