/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: '',
            items: [{ label: 'หน้าหลัก', icon: 'pi pi-fw pi-home', to: '/' },
                    { label: 'จัดการข้อมูล', icon: 'pi pi-fw pi-list', to: '/pages/menu/manage_info' },
                    { label: 'จัดการผู้ทวนสอบ', icon: 'pi pi-fw pi-id-card', to: '/pages/menu/verifier' },
                    { label: 'จัดการผู้ใช้งาน/บริษัท', icon: 'pi pi-fw pi-building', to: '/pages/menu/company' }

            ]
        },
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
