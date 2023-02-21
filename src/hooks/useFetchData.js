import { useState, useEffect } from "react";
function useFetchData(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	useEffect(() => {
		setLoading("loading...");
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setData(data);
			})
			.catch((err) => {
				setLoading(false);
				console.log(`Error: ${err}`);
			});
	}, [url]);
	return { data, loading };
}
export default useFetchData;
