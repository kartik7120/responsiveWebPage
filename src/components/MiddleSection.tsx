export default function MiddleSection() {
    return (
        <div className="flex flex-col items-center gap-y-7">
            <div className="flex-col flex gap-y-5">
                <p className="text-5xl font-bold text-center">We’ve really sped up our workflow</p>
                <p className="text-lg text-center">We’ve just released a new update! Check out the all new dashboard view.
                    Pages and now load faster.you can try us for free for 30 days.</p>
                <p className="text-lg text-center">Join 4,000+ companies already growing</p>
            </div>
            <div className="flex flex-row items-center gap-x-6">
                <div className="rounded-md py-2 px-4 border-black border w-fit flex flex-row items-center gap-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-narrow-right" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                    </svg>
                    <button className="bg-primary-500 text-black ">
                        Start Learning Today
                    </button>
                </div>
                <button
                    className="border text-lg font-medium relative border-neutral-200 dark:border-white/[0.2] text-white dark:text-white px-4 py-2 rounded-lg bg-[#7F56D9]">
                    <span>Join now</span>
                </button>
            </div>
        </div>
    )
}
