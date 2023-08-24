import React, { useState, useEffect } from 'react'
import NewsPaper from '@/app/assets/NewsPaper'
import './styles.css'
import PhotoCamera from '@/app/assets/PhotoCamera'
import Telescope from '@/app/assets/Telescope'
import Earth from '@/app/assets/Earth'
import PressHover from '@/app/assets/PressHover'
import Icon from '../Icon/Icon'

const MenuBar = () => {
    const [isHover, setIsHover] = useState({
        isNewsPaperHover: false,
        isPhotoCameraHover: false,
        isTelescopeHover: false,
        isEarthHover: false
    });


    const handleMouseEnter = (key: string) => {
        setIsHover(prevState => ({ ...prevState, [key]: true }));
    };

    const handleMouseLeave = (key: string) => {
        setIsHover(prevState => ({ ...prevState, [key]: false }));
    };

    return (
        <ul className='menu-bar'>
            <li className='menu-bar-item-typography menu-bar-item'
                onMouseEnter={() => handleMouseEnter('isNewsPaperHover')}
                onMouseLeave={() => handleMouseLeave('isNewsPaperHover')}
            >
                <Icon>
                    <NewsPaper />
                    {isHover.isNewsPaperHover && 'news'}
                </Icon>
            </li>
            <li className='menu-bar-item menu-bar-item-space menu-bar-item-typography'
            onMouseEnter={() => handleMouseEnter('isPhotoCameraHover')}
            onMouseLeave={() => handleMouseLeave('isPhotoCameraHover')}
            >
                <Icon>
                    <PhotoCamera />{isHover.isPhotoCameraHover && 'photos'}
                </Icon>
            </li>
            <li className='menu-bar-item menu-bar-item-space menu-bar-item-typography'
            onMouseEnter={() => handleMouseEnter('isTelescopeHover')}
            onMouseLeave={() => handleMouseLeave('isTelescopeHover')}
            >
                <Icon>
                    <Telescope />{isHover.isTelescopeHover && 'about'}
                </Icon>
            </li>
            <li className='menu-bar-item menu-bar-item-space menu-bar-item-typography'
             onMouseEnter={() => handleMouseEnter('isEarthHover')}
             onMouseLeave={() => handleMouseLeave('isEarthHover')}
            >
                <Icon>
                    <Earth />{isHover.isEarthHover && 'contact'}
                </Icon>
            </li>
        </ul>
    )
}

export default MenuBar