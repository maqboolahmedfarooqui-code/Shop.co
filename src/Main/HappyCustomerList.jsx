import HappyCustomerCard from './HappyCustomerCard.jsx'

function HappyCustomerList(){

    return(
        <div className='flex mt-6 md:mt-[40px] ml-[15px] md:ml-[100px] gap-4'>

            <HappyCustomerCard name={'Sarah M.'} comment={`'"I'm blown away by the quality and style of the cloth I received from Shop.co. From casual wera to elegant dresses, every piece I'vev bought has exceeded my expectations."`}/>
            <div className='hidden md:block'>
            <HappyCustomerCard name={'Alex K.'} comment={`'"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`}/>
            </div>

            <div className='hidden md:block'>
            <HappyCustomerCard name={'James L.'} comment={`'"As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`}/>
            </div>
        </div>
    )
}

export default HappyCustomerList;