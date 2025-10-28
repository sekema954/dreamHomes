//FAQCard.tsx
import type { FAQProp } from "../hooks/useFrequentlyAskedQuestions"
export const FAQCard = ({ title, context, link }:FAQProp) => {
    return(
        <div 
        className="shrink-0 gap-[24px] px-[40px] lg:w-[413px] w-[358px] h-[282px] bg-[#141414] rounded-lg border border-[#363636] 
        flex flex-col items-start justify-center">
            <h1 className="font-semibold text-[20px]">{title}</h1>
            <p className="font-medium text-[16px] text-[#999999]">{context}</p>
            <a className="w-full lg:w-auto flex" href={link}>
                <button
                className="lg:w-[107px] flex-1 h-[48px] bg-[#141414] rounded-lg border border-[#363636] transition-all duration-[0.5s] hover:bg-[#703BF6]/80">
                    Read more
                </button>
            </a>
        </div>
    )
}