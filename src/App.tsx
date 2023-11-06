import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ImageBox } from "./components/ImageBox";
import { Dropdown } from "./components/Dropdown";

const countries = [
	"Austria",
	"Belgium",
	"Bulgaria",
	"Croatia",
	"Cyprus",
	"Czech Republic",
	"Denmark",
	"Estonia",
	"Finland",
	"France",
];

const animals = [
  "Lion",
  "Elephant",
  "Giraffe",
  "Tiger",
  "Kangaroo",
  "Penguin",
  "Dolphin",
  "Hippopotamus",
]

export const App = () => {
	return (
		<>
			<Header />
			<p>Welcome to this site.</p>
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
			<Dropdown choices={countries} />
			<Dropdown choices={animals} />
			<Footer />
		</>
	);
};
