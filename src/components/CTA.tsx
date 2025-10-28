//CTA.tsx


export const CTA = () => {
    return(
        <section className="flex items-center lg:gap-10 gap-5 grid lg:grid-cols-[80%_40%] grid-rows-auto lg:px-30 px-5 lg:mt-20 mt-8">
            <div className="flex flex-col gap-[10px]">
                <h1 className="font-semibold text-[28px] lg:text-[38px]">Start Your Real Estate Journey Today</h1>
                <p className="text-[16px] medium-semibold text-[#999999]">
                    Your dream property is just a click away. 
                    Whether you're looking for a new home, a strategic 
                    investment, or expert real estate advice, Estatein 
                    is here to assist you every step of the way. Take the 
                    first step towards your real estate goals and explore 
                    our available properties or get in touch with our 
                    team for personalized assistance.
                </p>
            </div>

            <button className="rounded rounded-lg bg-[#703BF7] transition-all duration-[.5s] hover:bg-[#703BF7]/80 h-[49px] lg:w-[152px] max:w-[152px]">Explore Properties</button>
        </section>
    )
}