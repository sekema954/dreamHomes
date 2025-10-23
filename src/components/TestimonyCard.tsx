import { Star } from "lucide-react";

//TestimonyCard.tsx
export interface testimonialProp{
    id:string;
    title:string;
    context:string;
    rating:number;
    author:string;
    location:[{
        country: string;
        city:string;
    }];
    profilePicture:string;
};

export const TestimonyCard = ({id, title, context, rating, author, location, profilePicture}:testimonialProp) => {
    return(
        <div key={id} className="relative shrink-0 w-[413px] h-[363px] bg-[#141414] border border-[#363636] p-[30px] flex flex-col gap-5 rounded-lg">
            <div className="flex">
                {Array.from({length:rating}).map((_, idx)=>(
                    <div className="w-[38px] h-[38px] rounded-full border border-[#363636] flex items-center justify-center" key={idx}>
                        <Star fill="orange" color="orange" />
                    </div>
                 ))}
            </div>


            <h1 className="text-[30px] font-semibold">{title}</h1>
            <p className="text-[16px] font-medium">{context}</p>
            <div className="flex items-center  gap-4 absolute bottom-5">
                <img className="w-[50px] h-[50px] rounded-full" src={profilePicture} alt={`estatein, testimony${title}`} aria-label={`estatein, testimony${title}`} />
                <div className="flex flex-col gap-3">
                    <h1 className="text-[18px] font-medium">{author}</h1>
                    {location.map((l, idx)=>(
                        <div className="flex gap-2 text-[#999999]" key={idx}>
                            <p>{l.country}</p>
                            <p>{l.city}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}