import { useRouter } from "next/router"
import { useState } from "react";

//Icons
import { AiFillPlusCircle, AiOutlinePlusCircle, AiFillFire, AiOutlineFire, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs';

function NavItem({ text, path, active }) {

    const isActive = (active == text);

    function getMenuIcon(itemText) {
        switch (itemText) {
            case 'New':
                return isActive ? <AiFillStar /> : <AiOutlineStar />;
                break;
            case 'Popular':
                return isActive ? <AiFillFire /> : <AiOutlineFire />;
                break;
            case 'Collection':
                return isActive ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />;
                break;
            case 'Create':
                return isActive ? <AiFillPlusCircle /> : <AiOutlinePlusCircle />;
                break;
            default:
                break;
        }
    }

    return (
        <div
            className={`navItem ${active == text ? 'active' : ''}`}
            onClick={() => console.log({ text })}
        >
            <i>{getMenuIcon(text)}</i>
            <p>{text}</p>

            <style jsx>{`
                .navItem {
                    display: flex;
                    color: rgba(0,0,0,0.6);
                    cursor: pointer;
                    margin: 10px;
                    align-itens: center;
                    padding: 6px 40px 6px 3px;
                    border-radius: 7px;
                }

                .navItem:hover {
                    color: rgba(0,0,0,1);
                }

                .navItem p {
                    margin-left: 5px;
                    padding-top: 3px;
                    font-size: 19px;
                }

                .navItem i {
                    font-size: 25px;
                    margin: 0px;
                    padding: 0px;
                }
                
                .active {
                    background: #eee;
                }
            `}</style>
        </div>


    )
}

export default function SideBar() {

    const [activeMenuItem, setActiveMenuItem] = useState('New')

    return (
        <section className='sideBar'>
            <h1>Pallete Project</h1>
            <nav>
                <NavItem text='New' path='./' active={activeMenuItem} />
                <NavItem text='Popular' path='./' active={activeMenuItem} />
                <NavItem text='Collection' path='./' active={activeMenuItem} />
                <NavItem text='Create' path='./' active={activeMenuItem} />
            </nav>

            <style jsx>{`
                .sideBar {
                    width: 193px;
                    height: 100vh;
                    position: fixed;
                    padding: 10px 10px 0px 10px;
                    border-right: 1px solid rgba(0,0,0,0.1);
                }

                .sideBar h1 {
                    font-size: 23px;
                    text-align: center;
                    margin: 10px 0px 15px 0px;
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