
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { products } from '../components/productItems'
import SecondContainer from '../components/SecondContainer'
import ShowItem from '../components/ShowItem'

const DashBoard = (props) => {
   

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ShowItem 
            productsLists={products}
            ></ShowItem>
            <SecondContainer></SecondContainer>
            <ShowItem productsLists={products}></ShowItem>
            <Footer></Footer>
           
           
        </div>
    )
}

export default DashBoard