import { Nav } from "react-day-picker";
import { Navbar } from "./navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <main className="flex-1">{children}</main>
        </>
    );
};

export default Layout;