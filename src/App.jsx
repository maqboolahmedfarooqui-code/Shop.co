import MyAlert from './Header/MyAlert'
import NavBar from './Header/NavBar'
import MainBanner from './Header/MainBanner'
import BrandsBar from './Header/BrandsBar'
import NewArrivals from './Main/NewArrivals.jsx'
import NewArrivalsList from './Main/NewArrivalsList.jsx'
import TopSelling from './Main/TopSelling.jsx'
import TopSellingList from './Main/TopSellingList.jsx'
import Browse from './Main/Browse.jsx'
import HappyCustomer from './Main/HappyCustomer.jsx'
import HappyCustomerList from './Main/HappyCustomerList.jsx'
import StayUptoDate from './Footer/StayUptoDate.jsx'
import Bottom from './Footer/Bottom.jsx'

function App() {
  

  return (
    <>
     <MyAlert/>
     <NavBar/>
     <MainBanner/>
     <BrandsBar/>
     <NewArrivals/>
     <NewArrivalsList/> 
     <TopSelling/> 
     <TopSellingList/> 
     <Browse/>
     <HappyCustomer/>
     <HappyCustomerList/>
     <StayUptoDate/>
     <Bottom/>
    </>
  )
}

export default App
