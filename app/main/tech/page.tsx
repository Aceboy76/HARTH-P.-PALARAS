"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Tech() {
    const [techItems, setTechItems] = useState(initialTechItems)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTechItems(shuffle([...techItems]))
        }, 2000)

        return () => clearTimeout(timeout)
    }, [techItems])

    return (
        <div id="tech" className="h-fit py-[180px] space-y-8">
            <div>
                <p className="text-5xl font-rubik">Tech</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-10">
                <AnimatePresence>
                    {techItems.map((tech) => (
                        <motion.div
                            key={tech.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={spring}
                            className="w-full aspect-square rounded-4xl bg-slate-600 flex items-center justify-center"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className={`${tech.size} object-contain max-w-full max-h-full`}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

const initialTechItems = [
    { id: "csharp", icon: "/c-sharp.svg", name: "C#", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
    { id: "java", icon: "/java.svg", name: "Java", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
    { id: "python", icon: "/python.svg", name: "Python", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
    { id: "vb", icon: "/vb.svg", name: "VB", size: "w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40" },
    { id: "js", icon: "/js.svg", name: "JavaScript", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
    { id: "ts", icon: "/ts.svg", name: "TypeScript", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
    { id: "react", icon: "/react.svg", name: "React", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
    { id: "laravel", icon: "/laravel.svg", name: "Laravel", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
    { id: "next", icon: "/next.svg", name: "Next.js", size: "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" },
]

/**
 * ==============   Utils   ================
 */
function shuffle<T>(array: T[]): T[] {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */
const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const item: React.CSSProperties = {
    width: 100,
    height: 100,
    borderRadius: "10px",
}
