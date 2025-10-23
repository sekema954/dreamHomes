//pages/Homes.tsx
import stars from '../assets/images/stars.png';
import hero from '../assets/images/hero.png';
import subContainer from '../assets/images/Sub Container.png';
import home from '../assets/images/store.png';
import propertyValue from '../assets/images/camera.png';
import management from '../assets/images/tower.png';
import investment from '../assets/images/sun.png';
import { ArrowLeft, ArrowRight, ArrowUpRight} from 'lucide-react';
import { SectionHeader, testimoniesHeader } from '../components/SectionHeader';
import { featuredProperties } from '../components/SectionHeader';
import { useFetchFeaturedProperties } from '../hooks/useFeaturedProperties';
import { PropertyCard, type PropertyCardProp } from '../components/PropertyCard';
import { useEffect, useRef, useState } from 'react';
import { useTestimony } from '../hooks/useTestimonials';
import { TestimonyCard } from '../components/TestimonyCard';
export const HomePage = () => {
    const {isFeaturedProperties} = useFetchFeaturedProperties();
    const {testimonies} = useTestimony();
    const scrollAmout  = 400;
    const carouselRef = useRef<HTMLDivElement>(null);
    const [autoScrollActive, setScrollActive] = useState<boolean>(true);
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [shuffledProperties, setSuffuledProperties] = useState<PropertyCardProp[]>([]);
    const totalSlides = isFeaturedProperties.length;
    //let autoScroll: ReturnType<typeof setInterval>;



    //featured section scroll
    const handleNext = () => {
    if (!carouselRef.current) return;

    if (currentIndex < totalSlides - 1) {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        carouselRef.current.scrollBy({ left: scrollAmout, behavior: "smooth" });
    }

    // stop auto scroll after manual click
    setScrollActive(false);
    };

    const handlePrev = () => {
    if (!carouselRef.current) return;

    if (currentIndex > 1) {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
        carouselRef.current.scrollBy({ left: -scrollAmout, behavior: "smooth" });
    }

    // stop auto scroll after manual click
    setScrollActive(false);
    };

    //Shuffle only ones on scroll
    useEffect(() => {
        if (!isFeaturedProperties || isFeaturedProperties.length === 0) return;

        const shuffled = [...isFeaturedProperties].sort(() => Math.random() - 0.5);
        setSuffuledProperties(shuffled);
    }, [isFeaturedProperties]);

    // Auto-scroll (stop at last slide)
    useEffect(() => {
    if (!autoScrollActive || totalSlides === 0) return;

    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex < totalSlides && carouselRef.current) {
            carouselRef.current.scrollBy({ left: scrollAmout, behavior: "smooth" });
            return newIndex;
        } else {
            // stop when reaching the end
            clearInterval(interval);
            return prevIndex;
        }
        });
    }, 4000);

    return () => clearInterval(interval);
    }, [autoScrollActive, totalSlides]);

    return(
        <section>
            <div className="grid lg:grid-cols-2 grid-rows-auto relative lg:mt-10">
                <div className='absolute right-[45%] top-[25%]'>
                    <img className='w-[175px] h-[175px] hidden lg:flex' src={subContainer} alt="" />
                </div>
                {/**grid-layout 1 */}
                <div className='lg:w-full flex'>
                    <main className='lg:px-[100px]  px-5 flex flex-col gap-5'>
                        <img className='w-fit h-fit' src={stars} alt="" />
                        <h1 className='lg:text-[48px] text-[28px] font-semibold leading-tight'>Discover Your Dream Property with Estatein</h1>
                        <p className='text-[#999999]'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                        </p>
                        {/**cta buttons */}
                        <div className='flex flex-wrap gap-5'>
                             <button className='w-[139px] h-[63px] border border-[#363636] rounded-lg transition-all duration-[0.5s] hover:bg-[#703BF7]/80'>Learn more</button>
                        <button className='w-[191px] h-[63px] bg-[#703BF7] rounded-lg transition-all duration-[0.5s] hover:bg-[#703BF7]/80'>
                            Browse Properties
                        </button>
                        </div>
               
                        {/**stats */}
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
                            {[
                                {id:1, title:"Happy Customers", value:"200",},
                                {id:2, title:"Properties For Clients", value:"10k",},
                                {id:3, title:"Years of Experience", value:"16",},
                            ].map((stat, index)=>(
                                <div
                                    key={stat.id}
                                    className={`rounded-lg border border-[#363636] bg-[#1A1A1A] flex flex-col justify-center px-5 py-6 text-center w-full 
                                    ${index === 2 ? "col-span-2 lg:col-span-1" : ""}`}
                                >
                                    <span className='font-bold text-[40px]'>{stat.value}+</span>
                                    <span className='text-[#999999]'>{stat.title}</span>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>

                {/**grid-layout 2 */}
                <div 
                className='flex items-center justify-center  mt-10'
                style={{backgroundImage: `url(${hero})`,backgroundRepeat:'no-repeat', backgroundSize: "cover"}}
                >
                </div>
            </div>

            {/**perks */}
            <div className='w-[252px] bg-[#141414] w-full border-6 border-[#363636] shadow shadow-[#262626] mt-6'>
                <div className='flex lg:flex-nowrap flex-wrap p-5 bg-[#1A1A1A] gap-5'>
                    {[
                        {id:1, title:"Find Your Dream Home", icon:home},
                        {id:2, title:"Unlock Property Value", icon:propertyValue},
                        {id:3, title:"Effortless Property Management", icon:management},
                        {id:4, title:"Smart Investments, Informed Decisions", icon:investment}
                    ].map((l)=>(
                        <div className='px-1 relative lg:w-[455px] h-[212px] w-full flex-wrap border border-[#363636] rounded-lg flex flex-col items-center justify-center' key={l.id}>
                            <ArrowUpRight className='w-[34px] h-[34px] text-[#4D4D4D] absolute right-5 top-4' />
                            <div className='flex flex-col items-center gap-5'>
                                <img className='w-[82px] h-[82px]' src={l.icon} alt={l.title} aria-label={l.title} />
                                <p className='text-center font-semibold text-[20px]'>{l.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='lg:px-30 p-5'>
                {/**featured properties */}
                {featuredProperties.map((prop, _)=>(
                    <SectionHeader
                        key={prop.id}
                        title={prop.title} 
                        buttonText={prop.buttonText} 
                        subContext={prop.subContext} 
                        buttonLink={prop.buttonLink} 
                    />
                ))}

                <div 
                onTouchMove={(e)=>e.preventDefault()}
                onWheel={(e)=>e.preventDefault()}
                ref={carouselRef} 
                className='flex gap-5 overflow-auto max-w-[1200px] no-scrollbar'>
                    {shuffledProperties.map((property)=>(
                        <PropertyCard
                            id={property.id}
                            key={property.id}
                            thumbnail={property.thumbnail}
                            title={property.title}
                            description={property.description}
                            bathrooms={property.bathrooms}
                            bedrooms={property.bedrooms}
                            type={property.type}
                            price={property.price}
                            detailsLink={'/propertyDetails/:id'}                  
                        />
                    ))}

                </div>

                <div className=' hidden lg:flex items-center justify-between p-5'>
                    <span>
                        {`${currentIndex} of ${isFeaturedProperties.length}`}
                    </span>
                    <div className='flex items-center justify-center gap-2'>
                        <button onClick={handlePrev} className='w-[44px] h-[44px] border border-[#363636] rounded-full flex items-center justify-center transform-all duration-[0.5s] hover:bg-[#703BF6]/80'>
                            <ArrowLeft />
                        </button>

                        <button onClick={handleNext} className='w-[44px] h-[44px] border border-[#363636] rounded-full flex items-center justify-center transform-all duration-[0.5s] hover:bg-[#703BF6]/80'>
                            <ArrowRight />
                        </button>
                    </div>
                </div>

                {/**carousel button for mobile devices */}
                <div className="flex lg:hidden flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5">
                {/* Left: View All button */}
                <a href="">
                    <button className="text-sm w-full sm:w-[155px] h-[40px] border border-[#363636] bg-[#1A1A1A] rounded-lg transition-all duration-500 hover:bg-[#703BF7]/80">
                    View All Properties
                    </button>
                </a>

                {/* Right: navigation controls */}
                <div className="flex items-center justify-between sm:justify-center gap-4 w-full sm:w-auto">
                    <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`w-[40px] h-[40px] border border-[#363636] rounded-full flex items-center justify-center transition-all duration-500 
                        ${currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#703BF6]/80"}`}
                    >
                    <ArrowLeft size={18} />
                    </button>

                    <span className="text-sm text-gray-400 whitespace-nowrap">
                    {`${currentIndex + 1} of ${isFeaturedProperties.length}`}
                    </span>

                    <button
                    onClick={handleNext}
                    disabled={currentIndex === isFeaturedProperties.length - 1}
                    className={`w-[40px] h-[40px] border border-[#363636] rounded-full flex items-center justify-center transition-all duration-500 
                        ${currentIndex === isFeaturedProperties.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#703BF6]/80"}`}
                    >
                    <ArrowRight size={18} />
                    </button>
                </div>
                </div>
            </div>

            {/**Testimony */}
            <div className='lg:px-30'>
                {testimoniesHeader.map((t, _)=>(
                    <SectionHeader
                    key={t.id}
                    title={t.title} 
                    buttonText={t.buttonText} 
                    subContext={t.subContext} 
                    buttonLink={t.buttonLink} />
                ))}


                <div className='flex gap-4 overflow-auto no-scrollbar py-'>
                        {testimonies.slice(0, 10).map((t, _)=>(
                        <TestimonyCard
                        key={t.id}
                        id={t.id} 
                        title={t.title} 
                        context={t.context} 
                        rating={t.rating} 
                        author={t.author} 
                        location={t.location} 
                        profilePicture={t.profilePicture} />
                    ))}
                </div>
             
            </div>
        </section>
    )
};