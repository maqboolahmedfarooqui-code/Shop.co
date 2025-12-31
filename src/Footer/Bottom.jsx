import Picture from '../Header/Picture.jsx'
import Logo from '../assets/Logo.png'
import Text from '../Header/Text.jsx'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TextButton from '../Header/TextButton.jsx'
import visa from '../assets/visa.png'
import masterCard from '../assets/masterCard.png'
import paypal from '../assets/paypal.png'
import applepay from '../assets/applepay.png'
import googlepay from '../assets/googlepay.png'

function Bottom() {

  return (
    <div className="bg-[#F0F0F0] w-full h-auto">

      {/* ——— Main Columns ——— */}
      <div className="flex flex-wrap justify-start md:justify-between gap-[0px] md:gap-[100px] px-4 md:px-0 pt-[32px] md:pt-[50px]">

        {/* Logo + Social */}
        <div className="w-full md:flex-1 flex flex-col ml-[0px] md:ml-[100px]">
          <Picture logoClassName={'w-[144px] h-[20px] md:w-[167px] md:h-[23px]'} picture={Logo} logoHref={'#'} />
          <Text className={'pt-[14px] md:pt-[25px] text-gray-700'} text={'We have clothes that suits your style and which you\'re proud to wear. From women to men.'} />
          <div className='flex gap-2 pt-[20px] md:pt-[35px]'>
            <TwitterIcon sx={{cursor:'pointer'}}/>
            <FacebookIcon sx={{cursor:'pointer'}} />
            <InstagramIcon sx={{cursor:'pointer'}} />
            <GitHubIcon sx={{cursor:'pointer'}} />
          </div>
        </div>

        {/* COMPANY */}
        <div className="w-1/2 md:flex-1 flex flex-col gap-3 pt-[32px] md:pt-[0px]">
          <Text className={'text-[14px] md:text-[16px] font-semibold'} text={'COMPANY'} />
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'About'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Features'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Works'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Career'}/>
        </div>

        {/* HELP */}
        <div className="w-1/2 md:flex-1 flex flex-col gap-3 pt-[32px] md:pt-[0px]">
          <Text className={'text-[14px] md:text-[16px] font-semibold'} text={'HELP'} />
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Customer Support'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Delivery Details'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Terms & Conditions'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Privacy Policy'}/>
        </div>

        {/* FAQ */}
        <div className="w-1/2 md:flex-1 flex flex-col gap-3 pt-[32px] md:pt-[0px]">
          <Text className={'text-[14px] md:text-[16px] font-semibold'} text={'FAQ'} />
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Account'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Manage Deliveries'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Orders'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Payment'}/>
        </div>

        {/* RESOURCES */}
        <div className="w-1/2 md:flex-1 flex flex-col gap-3 pt-[32px] md:pt-[0px]">
          <Text className={'text-[14px] md:text-[16px] font-semibold'} text={'RESOURCES'} />
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Free eBook'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Development Tutorial'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'How to - Blog'}/>
          <TextButton href={'#'} textButtonClassName={'text-[14px] md:text-[16px] font-thin'} textButtonText={'Youtube Playlist'}/>
        </div>
      </div>

      {/* ——— Horizontal Line ——— */}
      <hr className="mx-auto w-[358px] md:w-[1240px] border-t-[1px] border-gray-300 mt-[40px] md:mt-[50px] mb-[16px]" />

      {/* ——— Bottom Row ——— */}
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center w-full px-4 md:px-0 mt-6">
        
        {/* Copyright */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-start md:ml-[100px]'>
          <Text className={'text-[14px] text-gray-600'} text={'Shop.co © 2000-2026, All Rights Reserved'} />
        </div>

        {/* Payment Logos */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end gap-4 md:gap-6 mt-4 md:mt-0'>
          <Picture logoClassName={''} logoHref={'#'} picture={visa} />
          <Picture logoClassName={''} logoHref={'#'} picture={masterCard} />
          <Picture logoClassName={''} logoHref={'#'} picture={paypal} />
          <Picture logoClassName={''} logoHref={'#'} picture={applepay} />
          <Picture logoClassName={''} logoHref={'#'} picture={googlepay} />
        </div>
      </div>
      
    </div>
  )
}

export default Bottom;
