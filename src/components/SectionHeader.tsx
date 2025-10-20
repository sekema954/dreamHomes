interface PropHeader{
    title:string;
    buttonText:string;
    subContext:string;
    buttonLink:string;
};

import star from '../assets/images/stars.png';

export const SectionHeader = ({title, buttonText, subContext, buttonLink}:PropHeader) => {
    return(
        <div className='flex items-center justify-between lg:p-30 p-5 gap-4'>
            <div className='flex flex-col gap-3'>
                <img className='w-[68px] h-[34px]' src={star} alt="estatein" aria-label='estatien' />
                <h1 className='font-semibold lg:text-[48px] text-[28px]'>{title}</h1>
                <p className='text-[#999999] font-meduim text-[18px]'>{subContext}</p>
            </div>

            <a className='hidden lg:flex' href={buttonLink} type='button' aria-label='estatein'>
                <button className='w-[196px] h-[63px] bg-[#1A1A1A] border border-[#363636] rounded-lg transition-all duration-[0.5s] hover:bg-[#703BF7]/80'>{buttonText}</button>
            </a>
        </div>
    )

};

export const featuredProperties = [
    {
        id:1, 
        title:"Featured Properties", 
        subContext:"Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information.",
        buttonText:"View All Properties",
        buttonLink:"/properties"
    }
]