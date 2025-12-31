import Cards from './Cards.jsx'
import Tshirt from '../assets/Tshirt.png'
import skinny from '../assets/skinny.png'
import checkered from '../assets/checkered.png'
import sleeve from '../assets/sleeve.png'

function NewArrivalsList(){

    return(
        <div className="flex flex-wrap mt-[30px]">

  <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
    <div className="">
       <Cards picture={Tshirt}  name={'T-shirt with Tape Details'} price={'$120'}/>
    </div>
  </div>

  <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
    <div className="">
        <Cards picture={skinny}  name={'Skinny Fit Jeans'} price={'$240'} oldPrice={'$260'} discper={'-20%'}/>
    </div>
  </div>
  
  <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
    <div className="">
        <Cards picture={checkered}  name={'Checkered Shirt'} price={'$180'}/>
    </div>
  </div>

  <div className="w-1/2 md:w-1/4 p-2 flex justify-center">
    <div className="">
       <Cards picture={sleeve}  name={'Sleeve Striped T-shirt'} price={'$130'} oldPrice={'$160'} discper={'-30%'}/>
    </div>
  </div>
</div>

    )
}

export default NewArrivalsList;