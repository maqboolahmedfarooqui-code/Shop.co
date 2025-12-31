import Cards from "./Cards"
import vertical from '../assets/vertical.png'
import courage from '../assets/courage.png'
import loose from '../assets/loose.png'
import faded from '../assets/faded.png'

function TopSellingList(){

    return(
        <div className="flex flex-wrap mt-[40px]">

         <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
           <Cards picture={vertical} name={'Vertical Striped Shirt'} price={'$212'} oldPrice={'$232'} discper={'-20%'}/>
         </div>

         <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
         <Cards picture={courage} name={'Courage Graphic T-shirt'} price={'$145'} />
         </div>

         <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
         <Cards picture={loose} name={'Loose Fit Bermuda Shorts'} price={'$80'} />
         </div>

         <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
         <Cards picture={faded} name={'Faded Skinny Jeans'} price={'$210'} />
         </div>

        </div>
    )
}

export default TopSellingList;