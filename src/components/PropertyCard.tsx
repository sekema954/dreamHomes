//PropertyCard.tsx

import { Bath, Bed, Building } from "lucide-react";
import placeholder from '../assets/images/buildingPlaceholder.png';
export interface PropertyCardProp {
    id: string;
    thumbnail:string;
    title:string;
    description:string;
    bathrooms:number | string;
    bedrooms:number | string;
    type:string;
    price:string | number;
    detailsLink: string;
};

export const PropertyCard = ({
    id,
    thumbnail,
    title,
    description,
    bathrooms,
    bedrooms,
    type,
    price,
    detailsLink,
} : PropertyCardProp) => {
    return(
        <div key={id} className="w-[413px] h-[549px] p-4 bg-[#141414] border border-[#363636] rounded-lg">
            <div className="w-[353px] h-[255px] rounded-lg border border-[#363636] bg-[#363636]">
                <img 
                onError={(e)=>e.currentTarget.src = placeholder}
                className="rounded-lg" src={thumbnail || placeholder} alt={`estatein, ${title}`} aria-label={`estatein, ${title}`} />
            </div>
            {/**property details */}
            <div className="flex flex-col gap-5 mt-4">
                <h1 className="text-[20px] semibold">{title}</h1>
                <p className="text-[16px] font-medium text-[#999999]">{description} <a className="text-white" href={detailsLink} aria-label={`estatein, ${title}`}>Read more</a></p>
                <div className="flex items-center justify-between"> 
                    {[
                        {id:1, icon:Bed, value:bedrooms, title:"Bedroom"},
                        {id:2, icon:Bath, value:bathrooms, title:"Bathroom"},
                        {id:3, icon:Building, value:type}
                    ].map((d, _)=>(
                        <div key={d.id} className="flex gap-1">
                            <d.icon size={18} />
                            <p className="text-sm">{d.value} {d.title}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <p className="text-[#999999] text-sm">Price</p>
                        <h1 className="text-[20px] font-semibold">{price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h1>
                    </div>
                    <a href={detailsLink} aria-label={`estatein, ${title}`}>
                        <button className="bg-[#703BF7] w-[207px] h-[49px] rounded-lg transition-all duration-[0.5s] hover:bg-[#703BF7]/80 " aria-label={`estatein view property for ${title}`}>View Property Details</button>
                    </a>
                </div>
            </div>
        </div>
    )

}