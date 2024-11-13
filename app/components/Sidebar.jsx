"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarSource = [
    { num: 1, path: '/', title: 'YOUR INFO' },
    { num: 2, path: '/step2', title: 'SELECT PLAN' },
    { num: 3, path: '/step3', title: 'ADD-ONS' },
    { num: 4, path: '/step4', title: 'SUMMARY' },
    { num: 5, path: '/step5', title: 'Account Details' }
    
];

const Sidebar = () => {
    const pathname = usePathname();
    const activeStyle = {
        backgroundColor: 'hsl(206, 94%, 87%)',
        color: 'hsl(243, 100%, 62%)'
    };
    
    return (
        <div className="sidebar-container"> 

            {sidebarSource.map((item) => (
                <div key={item.num} className="sidebar__content-box">
                    <div>
                        <Link href={item.path} passHref>
                            <span
                                className="sidebar__num"
                                style={pathname === item.path ? activeStyle : undefined}
                            >
                                {item.num}
                            </span>
                        </Link>
                    </div>
                    <div>
                        <p className="sidebar__step light-gray-text">step {item.num}</p>
                        <p className="sidebar__title">{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;