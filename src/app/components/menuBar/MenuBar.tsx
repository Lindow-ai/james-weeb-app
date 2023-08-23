import React, { useState } from 'react'
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

    return (
        <ul className='menu-bar'>
            <li className='menu-bar-item-typography menu-bar-item'
                onMouseEnter={() => setIsHover({ ...isHover, isNewsPaperHover: true  })}
                onMouseLeave={() => setIsHover({ ...isHover, isNewsPaperHover: false  })}
            >
                <Icon>
                    <NewsPaper />{isHover.isNewsPaperHover && 'press'}
                </Icon>
            </li>
            <li className='menu-bar-item menu-bar-item-space menu-bar-item-typography'
            onMouseEnter={() => setIsHover({ ...isHover, isPhotoCameraHover: true  })}
            onMouseLeave={() => setIsHover({ ...isHover, isPhotoCameraHover: false  })}
            >
                <Icon>
                    <PhotoCamera />{isHover.isPhotoCameraHover && 'photos'}
                </Icon>
            </li>
            <li className='menu-bar-item menu-bar-item-space menu-bar-item-typography'
            onMouseEnter={() => setIsHover({ ...isHover, isTelescopeHover: true  })}
            onMouseLeave={() => setIsHover({ ...isHover, isTelescopeHover: false  })}
            >
                <Icon>
                    <Telescope />{isHover.isTelescopeHover && 'about'}
                </Icon>
            </li>
            <li className='menu-bar-item menu-bar-item-space menu-bar-item-typography'
             onMouseEnter={() => setIsHover({ ...isHover, isEarthHover: true  })}
             onMouseLeave={() => setIsHover({ ...isHover, isEarthHover: false  })}
            >
                <Icon>
                    <Earth />{isHover.isEarthHover && 'contact'}
                </Icon>
            </li>
        </ul>
    )
}

export default MenuBar