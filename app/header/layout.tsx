export default function HeaderLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full h-auto px-6 sm:px-10 lg:px-[180px] py-6 lg:py-4 bg-[var(--background)]">
            {children}
        </section>
    )
}
