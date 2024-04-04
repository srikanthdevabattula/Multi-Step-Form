import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<main className="px-[10%] lg:px-[7%] md:px-[6%] sm:px-[3%] py-[70px]">
			
			<Outlet />
		
		</main>
	);
};

export default MainLayout;
