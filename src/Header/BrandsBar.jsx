import Picture from './Picture.jsx'
import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/calvinKlein.png";

function BrandsBar(){

    return(
        <div className="flex flex-row items-center justify-center flex-wrap gap-4 md:gap-40 bg-black w-full h-[146px] md:h-[100px]">
         <Picture logoHref={'#'} logoClassName={'w-[116px] h-[23px]'} picture={versace} />
         <Picture logoHref={'#'} logoClassName={'w-[63px] h-[26px]'} picture={zara} />
         <Picture logoHref={'#'} logoClassName={'w-[109px] h-[25px]'} picture={gucci} />
         <Picture logoHref={'#'} logoClassName={'w-[127px] h-[20px]'} picture={prada} />
         <Picture logoHref={'#'} logoClassName={'w-[134px] h-[21px]'} picture={calvinKlein} />

        </div>
    )
}

export default BrandsBar;