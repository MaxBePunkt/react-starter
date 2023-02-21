import "./style.scss";
const ItemButton = ({ action, children }) => {
	return <button onClick={action}>{children}</button>;
};

export default ItemButton;
