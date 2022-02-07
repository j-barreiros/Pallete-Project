import { useRouter } from "next/router"

function NavItem({ title, path }) {
    return (
        <div
            className="navItem"
            onClick={() => console.log({ title })}
        >
            {title}

            <style jsx>{`
                .navItem {
                    display: flex;
                    justify-content: center;
                    background: #666;
                }
            `}</style>
        </div>


    )
}

export default function SideBar() {
    const navItems = [
        {
            title: "All Palletes",
            path: "./"
        },
        {
            title: "My Collection",
            path: "./"
        },
        {
            title: "Create",
            path: "./"
        }
    ]

    return (
        <section>
            <nav>
                {navItems.map((item, index) => <NavItem key={index} title={item.title} path={item.path} />)}
            </nav>

            <style jsx>{`
            
            `}</style>
        </section>
    )
}