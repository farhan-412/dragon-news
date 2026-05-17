import { Outlet } from "react-router";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import Navbar from "../component/Navbar";
import LeftAside from "../component/homelayout/LeftAside";
import RightAside from "../component/homelayout/RightAside";

const HomeLayOut = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 space-x-4">
                <aside className="col-span-3 sticky top-0 h-fit">
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3 sticky top-0 h-fit">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayOut;