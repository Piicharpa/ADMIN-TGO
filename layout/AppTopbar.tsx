/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { onMenuToggle } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const router = useRouter();

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const handleQuit = () => {
        router.push('/logout');
    };

    return (
        <div className="layout-topbar flex items-center">
            <Link href="/" className="layout-topbar-logo">
                <span>ผู้ดูแลระบบ</span>
            </Link>

            <button
                ref={menubuttonRef}
                type="button"
                className="p-link layout-menu-button layout-topbar-button ml-4"
                onClick={onMenuToggle}
            >
                <i className="pi pi-bars" />
            </button>

            {/* ดันปุ่ม Quit ไปขวาสุด */}
            <div className="ml-auto">
                <button
                    type="button"
                    className="p-link layout-topbar-button"
                    onClick={handleQuit}
                >
                    <i className="pi pi-sign-out" />
                    <span className="ml-2">Quit</span>
                </button>
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
