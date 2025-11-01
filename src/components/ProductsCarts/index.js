import {FidgetSpinner} from 'react-loader-spinner'
import './index.css'

const ProductCarts=(props)=>{
    const {product,loader}=props
const {title,price,description,image}=product
    return(
        <>
        
        <li className="list-container">
            {/* <div className='setting-cate'>
                <p>{category}</p>
            </div> */}
            <div className='sub-list'>
            <img src={image} alt={title} className='image-products'/>
            <h1 className='title-head'>{title}</h1>
          <p className='price'> <span>Price:</span> {price}$ </p>
<details>
            <summary>
                Details
            </summary>
            <div className='details-content'>

{description}
            </div>
</details>
            
            </div>
        


        </li>
        
    
    </>
    
    )
}
export default ProductCarts
