import { useRouter } from "next/router"

function NavItem({ title, path }) {
    return (
        <div
            href=""
            className="navItem"
            onClick={() => console.log({ title })}
        >
            <p>{title}</p>

            <style jsx>{`
                .navItem {
                    color: #626262;
                    font-size: 25px;
                    cursor: pointer;
                    background: gray;
                    margin: 10px;
                }

                .navItem:hover {
                    color: #323232;
                }
            `}</style>
        </div>


    )
}

export default function SideBar() {
    const navItems = [
        {
            title: "New",
            path: "./"
        },
        {
            title: "Popular",
            path: "./"
        },
        {
            title: "Collection",
            path: "./"
        },
        {
            title: "Create",
            path: "./"
        }
    ]

    return (
        <section className='sideBar'>
            <nav>
                {navItems.map((item, index) => <NavItem key={index} title={item.title} path={item.path} />)}
            </nav>

            <style jsx>{`
                .sideBar {
                    width: 200px;
                    height: 100vh;
                    background: red;
                    position: fixed;
                }

                .sideBar nav {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
            
            `}</style>
        </section>
    )
}