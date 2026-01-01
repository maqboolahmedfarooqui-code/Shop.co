import Picture from "./Picture.jsx"
import mainbanner from "../assets/mainbanner.png";
import HeadingText from "./HeadingText";
import Text from './Text.jsx'
import Button from '@mui/material/Button';

function MainBanner(){

    return (
        <div className="flex flex-col md:flex-row lg:justify-center bg-[#F2F0F1] mt-6 gap-4">

            <div className=" mt-[40px] ml-[16px] md:mt-[100px] md:ml-[100px]">
            
             <HeadingText headingClassName={'font-bold text-4xl sm:text-6xl'} headingText={<>FIND CLOTHES <br/> THAT MATCHES <br/> YOUR STYLE </>} />

             <Text className={'font-thin text-sm md:text-base mt-[5px]'} text={<>Browse thought our range of meticulously crafted garments, designed to bring out <br/>your individuality and cater to your sense of style.</>} />
             
             <Button sx={{color:'white',backgroundColor:'black', width: { xs:'300px',
             md:'210px' },
             height: '52px',
             borderRadius:'30px',
             marginTop:'10px',
             }}>
             Shop Now
            </Button>                                                       

            <div className="flex flex-row mt-[22px] md:mt-[48px] gap-6">

                <div>
                    <HeadingText headingClassName={'font-bold text-2xl md:text-[40px]'} headingText={'200+'} />
                    <Text className={'text-xs md:text-base font-thin'} text={'International Brands'} />
                </div>

                <div>
                    <Text className={'h-[52px] md:h-[74px] w-[1px] bg-gray-400'} />
                </div>

                <div>
                    <HeadingText headingClassName={'font-bold text-2xl md:text-[40px]'} headingText={'2000+'} />
                    <Text className={'text-xs md:text-base font-thin'} text={'High-Quality Products'} />
                </div>

                <div>
                    <Text className={'h-[52px] md:h-[74px] w-[1px] bg-gray-400'} />
                </div>

                <div>
                    <HeadingText headingClassName={'font-bold text-2xl md:text-[40px]'} headingText={'30,00+'} />
                    <Text className={'text-xs md:text-base font-thin'} text={'Happy Customers'} />
                </div>

                <div>
                    <Text className={'hidden md:block h-[52px] md:h-[74px] w-[1px] bg-gray-400'} />
                </div>

            </div>
            

            </div>

            <div className="md:ml-[80px] md:mt-[75px]">
            < Picture logoHref={'#'} picture={mainbanner}  logoClassName={' w-[355px] h-[448px]'}/>
            </div>

        </div>
    )
}

export default MainBanner;