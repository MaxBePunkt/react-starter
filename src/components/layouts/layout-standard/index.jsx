const LayoutStandard = ({ width, className, children }) => {
	const widthClass = (width) => {
		if (width === "normal") {
			return "max-w-body";
		}
		if (width === "narrow") {
			return "max-w-body-narrow";
		}
		if (width === "full") {
			return "max-w-body-full";
		}
		return "max-w-body";
	};
	return (
		<div className={`layout-standard__wrapper ${className}`}>
			<section className={`layout-standard ${widthClass(width)}`}>
				{children}
			</section>
		</div>
	);
};

export default LayoutStandard;
