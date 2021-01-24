import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'State',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Counties',
        path: '/counties',
        icon: <GiIcons.GiColombia/>,
        cName: 'nav-text'
    },
    {
        title: 'Towns',
        path: '/towns',
        icon: <FaIcons.FaMapMarkedAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Vaccine',
        path: '/vaccine',
        icon: <GiIcons.GiLoveInjection/>,
        cName: 'nav-text'
    },
]
