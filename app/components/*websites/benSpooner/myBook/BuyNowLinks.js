import SlideFadeIn from "../../../utilityComponents/SlideFadeIn";

export default function BuyNowLinks({itemsCenter}) {
  return (
    <SlideFadeIn direction="up" className={`flex flex-col w-full w-auto ${itemsCenter} mt-4 text-sm font-gopher-mono`}>
      <p className="bold color-dark">BUY NOW</p>                
      <a 
          href="https://www.amazon.co.uk/Ben-Spooners-Beginner-Composer-Days/dp/139996769X/ref=sr_1_1?crid=WO4S5PFXTGBM&keywords=beginner+to+composer+in+14+days&qid=1697134011&sprefix=beginner+to+compo%2Caps%2C75&sr=8-1" 
          target="_blank" 
          rel="noopener noreferrer">
              <span className="hidden xl:inline">- </span><span className="underline color-green">Amazon↑</span>
      </a>
      <a 
          href="https://books.apple.com/gb/book/ben-spooners-beginner-to-composer-in-14-days/id6468330191" 
          target="_blank" 
          rel="noopener noreferrer">
              <span className="hidden xl:inline">- </span><span className="underline color-green">Apple Books↑</span>
      </a>
    </SlideFadeIn>
  );
}