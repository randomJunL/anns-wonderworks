import { Nav } from "react-day-picker";
import { Navbar } from "./navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <main>
                <div>
                    this is second layout
                </div>
                {children}
            </main>
        </>
    );
};

export default Layout;