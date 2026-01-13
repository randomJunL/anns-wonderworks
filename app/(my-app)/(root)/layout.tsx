import { Navbar } from "./navbar";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <main className="flex-1 flex flex-col min-h-screen">
                {children}
            </main>
        </>
    );
};

export default Layout;