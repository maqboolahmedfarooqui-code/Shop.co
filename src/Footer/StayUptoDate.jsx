import Text from '../Header/Text.jsx'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Button from '@mui/material/Button';

function StayUptoDate(){

    return(
        <div className="w-[358px] h-[293px] md:w-[1240px] md:h-[180px] bg-black flex flex-wrap mx-auto mt-[49px] md:mt-[80px] rounded-[25px]">

            <div className="w-full md:w-1/2 flex justify-center items-center">
              <Text className={'text-white font-bold text-[32px] md:text-[40px] pl-[24px] md:pl-[0px] md:text-center'} text={<>STAY UPTO DATE ABOUT <br className='hidden md:block' />  OUT <br className='block md:hidden' /> LATEST OFFERS</>}/>
            </div>

            <div className='w-full md:w-1/2 flex justify-center items-center'>
              <div className='text-center'>
                <div className='flex justify-center items-center w-[311px] md:w-[349px] h-[42px] md:h-[48px] bg-white rounded-[25px]'>
                    <EmailOutlinedIcon sx={{marginRight:'10px'}} />
                <input className='bg-white focus:outline-none' type="text" placeholder='Enter your email address' />
                </div>
                 <Button sx={{color:'black', backgroundColor:'white', borderRadius:'25px',marginTop:'12px',alignItems:'center',width:{xs:'311px',md:'349px'},height:{xs:'42px',md:"46px"}}} > Subscribe to Newsletter </Button> 
                </div>
            </div>

        </div>
    )
}

export default StayUptoDate;