/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
} from "react";
import { AppTopbarRef } from "@/types";
import { LayoutContext } from "./context/layoutcontext";

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const { onMenuToggle } = useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);
  const router = useRouter();

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

 const handleQuit = () => {
  window.location.assign("/cfp/login");
};

  return (
    <div className="layout-topbar flex items-center bg-white p-4 shadow-md rounded-lg">
      <div className="flex items-center">
        <div
          className="flex items-center justify-center cursor-pointer"
          style={{ width: "4rem", height: "4rem" }}
        >
          <img
            src="/img/favicon_admin.png"
            alt="Company Logo"
            className="h-full w-full object-contain p-2"
          />
        </div>
      </div>

      <button
        type="button"
        className="p-link layout-menu-button layout-topbar-button ml-4"
        onClick={onMenuToggle}
      >
        <i className="pi pi-bars" />
      </button>

      {/* Drove the Quit button to the far right */}
      <div className="ml-auto">
        <button
          type="button"
          className="p-link layout-topbar-button text-gray-700 hover:text-red-500"
          onClick={handleQuit}
        >
          <i className="pi pi-sign-out" />
          <span className="ml-2">Quit</span>
        </button>
      </div>
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;
