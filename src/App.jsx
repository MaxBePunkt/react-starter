import "./assets/css/main.scss";
import ItemButton from "./components/items/item-button";
import LayoutStandard from "./components/layouts/layout-standard";

function App() {
	let i = 0;
	const handleHeadline = () => {
		let allSpans = document.querySelectorAll("span");
		allSpans.forEach((span) => {
			span.classList.remove("uppercase");
		});
		allSpans[i].classList.toggle("uppercase");
		if (i === 7) i = 0;
		else i++;
	};
	return (
		<LayoutStandard width="normal">
			<div className="grid place-items-center min-h-screen w-full">
				<ItemButton action={handleHeadline}>
					<span>m</span>
					<span>a</span>
					<span>x</span>
					<span>i</span>
					<span>m</span>
					<span>i</span>
					<span>z</span>
					<span>e</span>
				</ItemButton>
			</div>
		</LayoutStandard>
	);
}

export default App;
