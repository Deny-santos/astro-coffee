import React, {useState} from 'react'
import { GiGalaxy } from "react-icons/gi"
import { Link } from 'react-router-dom'
import "./headerStyle.scss"
import { MdClose } from "react-icons/md"
import { FaBars } from "react-icons/fa"




const Header = () => {

    const [menuBarActive, setMenuBarActive] = useState(false)
    const handleActiveBar = () => {
        if(menuBarActive){
            setMenuBarActive(false)
        } else {
            setMenuBarActive(true)
        }
    }
    
  return (
    <header>
        <div className='content'>
            <div className='header__wrapp'>
                <Link to="/">
                    <GiGalaxy className='logo'/>
                </Link>
                <nav>
                    <ul className={menuBarActive? "active": ""}>
                        <li>
                            <div className='line'></div>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <div className='line'></div>
                            <Link to="/blackHoles">Buracos Negros</Link>
                        </li>
                        <li>
                            <div className='line'></div>
                            <Link to="/planetas">Planetas</Link>
                        </li>
                        <li>
                            <div className='line'></div>
                            <Link to="/galaxias">Galaxias</Link>
                        </li>
                        <li>
                            <div className='line'></div>
                            <Link to="/historia">Historia</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <button>+Submit</button>
            <div className='header__bars-div' onClick={handleActiveBar}>{!menuBarActive ? <FaBars/> : <MdClose/>}</div>
        </div>
    </header>
  )
}

export default Header