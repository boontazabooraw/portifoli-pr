"use client";

import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <aside className="bg-amber-100 hidden md:flex flex-col">
      <div>
        <h1>_Name</h1>
        <span>_Role</span>
      </div>
      <nav>
        <NavLink href="/dashboard">Dashboard</NavLink>
      </nav>
    </aside>
  );
}
