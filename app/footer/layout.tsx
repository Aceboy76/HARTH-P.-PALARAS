import React from "react";

export default function FooterLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <footer className="px-6 sm:px-10 md:px-20 lg:px-[180px] py-20 w-full bg-accent">
                {children}
            </footer>
        </>
    );
}
