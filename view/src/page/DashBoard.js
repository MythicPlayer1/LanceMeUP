
import { useContext } from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { products } from '../components/productItems'
import SecondContainer from '../components/SecondContainer'
import ShowItem from '../components/ShowItem'
import { AddProductContext } from '../components/UserContext'

const DashBoard = (props) => {
    const {addproduct}=useContext(AddProductContext)
   

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ShowItem  productsLists={products} addedProductList={addproduct}
            ></ShowItem>
            <SecondContainer></SecondContainer>
            <ShowItem productsLists={products}></ShowItem>
            <Footer></Footer>
           
           
        </div>
    )
}

export default DashBoard