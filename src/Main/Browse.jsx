import Text from '../Header/Text.jsx'
import Picture from '../Header/Picture.jsx';
import casual from '../assets/casual.png'
import formal from '../assets/formal.png'
import party from '../assets/party.png'
import gym from '../assets/gym.png' 
import formal2 from '../assets/formal2 (1).png'
import party2 from '../assets/party2.png'

function Browse(){

    return(
        <div className="flex flex-wrap justify-center items-center mx-auto mt-[80px] bg-[#F0F0F0] w-[358px] 
        md:w-[1235px] h-[1000px] md:h-[865px] rounded-xl gap-y-2 md:gap-y-0 overflow-x-hidden">

           <div className='w-full pt-10 md:pt-[70px]'>
           <Text className={'text-4xl md:text-5xl font-bold text-center'} text={'BROWSE BY DRESS STYLE'}/>
           </div>

          <div className='w-[310px] md:w-[407px] h-[190px] md:h-[289px] p-2 flex justify-center'>
            <Picture picture={casual} logoClassName={''}/>
          </div>

          <div className='hidden md:block w-[310px] md:w-[684px] h-[190px] md:h-[289px] p-2 flex justify-center'>
            <Picture picture={formal} />
          </div>
          
          <div className='hidden md:block w-[310px] md:w-[684px] h-[190px] md:h-[289px] p-2 flex justify-center'>
            <Picture picture={party} />
          </div>

          <div className='block md:hidden w-[310px] md:w-[684px] h-[190px] md:h-[289px] pt-[25px] p-2 flex justify-center'>
            <Picture picture={formal2} />
          </div>
          
          <div className='block md:hidden w-[310px] md:w-[684px] h-[190px] md:h-[289px] pt-[15px] p-2 flex justify-center'>
            <Picture picture={party2} />
          </div>

          <div className='w-[280px] md:w-[407px] h-[190px] md:h-[289px] flex justify-center'>
             <Picture picture={gym} />
          </div>
        </div>
    )
}

export default Browse;