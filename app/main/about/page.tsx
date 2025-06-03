import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <>
            <div
                id="about"
                className="w-full h-fit lg:h-screen flex flex-col-reverse lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-0 p-6 lg:p-0"
            >
                <div className="flex flex-col w-full lg:w-1/2 lg:p-10 align-middle font-normal gap-y-4 lg:gap-y-10 gap h-fit font-syne text-center lg:text-left">
                    <div>
                        <p className="text-2xl lg:text-5xl font-syne">
                            Here’s a closer look at who I am
                        </p>
                    </div>

                    <div className="space-y-2 lg:space-y-4 text-lg lg:text-justify font-rubik">
                        <p>
                            Motivated and resourceful BSIT graduating student with a proven
                            track record in software development and IT support. Successfully
                            developed and deployed a software solution during an internship at
                            a local water district, contributing to improved operational
                            workflows and system efficiency. Gained hands-on experience in
                            both front-end and back-end development using Laravel, Java, C#,
                            Visual Basic, React, and Next.js.
                        </p>
                        <p>
                            Actively participated in several web development and hackathon
                            competitions, showcasing strong problem-solving skills,
                            creativity, and teamwork under pressure. Recognized for delivering
                            innovative solutions and functional prototypes within tight
                            deadlines. Demonstrates a solid foundation in systems analysis,
                            maintenance, and modern application development, with a strong
                            drive to continue growing in a fast-paced tech environment.
                        </p>
                    </div>

                    <div className="flex justify-center mt-6">
                        <Button
                            variant={"default"}
                            className="py-6 rounded-3xl bg-[var(--destructive)] font-rubik text-xl"
                        >
                            See my resume!
                        </Button>
                    </div>
                </div>

                <div className="lg:w-1/2 lg:h-full flex justify-center mt-20 mb-6 lg:mt-0 lg:mb-0">
                    <img
                        src="https://placehold.co/500x550"
                        alt=""
                        className="rounded-4xl max-w-full h-auto"
                    />
                </div>
            </div>
        </>
    );
}
