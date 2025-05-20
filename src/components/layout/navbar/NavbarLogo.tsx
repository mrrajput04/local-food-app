
import { Link } from "react-router-dom";

export function NavbarLogo() {
	return (
		<Link to="/" className="flex items-center space-x-2">
			<div className="w-8 h-8 rounded-full bg-farm-green flex items-center justify-center">
				<span className="text-white font-bold">FC</span>
			</div>
			<span className="font-bold text-xl text-farm-green-dark">Local Food Connector</span>
		</Link>
	);
}
