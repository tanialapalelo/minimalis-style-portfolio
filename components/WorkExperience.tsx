
import { Timeline } from "@/components/ui/timeline";

const WorkExperience = () => {
    const data = [
        {
            title: <div className="p-10 border-2 boder-black w-full bg-yellow-200">1</div>,
            content: (
                <div>
                    <p className="">
                        Design intern at Google
                    </p>
                    <p>Worked on design system at Material 3 designs</p>
                    <p className="font-normal">20, April 2021</p>
                </div>
            ),
        },
        {
            title: <div className="p-10 border-2 boder-black w-full bg-pink-200">2</div>,
            content: (
                <div>
                    <p className="">
                        Sr. UI/UX Designer at Microsoft
                    </p>
                    <p>Worked on design system at Material 3 designs</p>
                    <p className="font-normal">20, April 2022</p>
                </div>
            ),
        },
        {
            title: <div className="p-10 border-2 boder-black w-full bg-green-200">3</div>,
            content: (
                <div>
                    <p className="">
                        Software Engineer at SASS Startup
                    </p>
                    <p>Worked on design system at Material 3 designs</p>
                    <p className="font-normal">20, April 2023</p>
                </div>
            ),
        },
    ];
    return (
        <div className="relative p-8 my-10 mx-auto max-w-3xl">

            <div className="absolute inset-0 border-t-2 border-b-2 border-black pointer-events-none" style={{ top: '20%', bottom: '20%' }} />

            <div className="absolute inset-0 border-l-2 border-r-2 border-black pointer-events-none" style={{ left: '20%', right: '20%' }} />

            <Timeline data={data} />
        </div>
    )
}

export default WorkExperience