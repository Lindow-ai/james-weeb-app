import NewsPaper from '@/app/assets/NewsPaper'
import './styles.css'
import PhotoCamera from '@/app/assets/PhotoCamera'
import Telescope from '@/app/assets/Telescope'
import Earth from '@/app/assets/Earth'

const MenuBar = () => {
    return (
        <ul className='menu-bar'>
            <li><NewsPaper /></li>
            <li className='menu-bar-item'><PhotoCamera /></li>
            <li className='menu-bar-item'><Telescope /></li>
            <li className='menu-bar-item'><Earth /></li>
        </ul>
    )
}

export default MenuBar