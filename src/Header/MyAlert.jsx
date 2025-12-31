import { useState } from 'react';
import Text from './Text.jsx'
import TextButton from './TextButton.jsx'
import CloseIcon from '@mui/icons-material/Close';

function MyAlert({ text }) {
  const [cross, setCross] = useState(true);

  let Close = () => {
    setCross(false);
  }

  return (
    cross &&
    <div className="relative w-full h-9.5 bg-black flex items-center justify-center">
      
      {/* Center Text */}
      <div className="flex items-center space-x-1">
        <Text
          className="text-white text-xs md:text-sm"
          text="Sign up and get 20% off your first order."
        />
        <TextButton
          href="#"
          textButtonClassName="text-white text-xs md:text-sm underline"
          textButtonText="Sign Up Now"
        />
      </div>

      {/* Right Icon */}
      <div className='absolute right-3 cursor-pointer text-white hidden sm:block'>
      <CloseIcon
        onClick={Close}
      />
      </div>
    </div>
  );
}

export default MyAlert;