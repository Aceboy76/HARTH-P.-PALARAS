import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="px-[20px] lg:px-[180px] w-full ">
                {children}
            </main>
        </>)
}