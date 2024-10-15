import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

function Layout() {

    return (
        <section className="bg-[#eef0f2]">
            <Nav />
            <section>
                <Outlet />
            </section>
        </section>
    )
}

export default Layout