import { useEffect ,useState} from "react"
import ProductsCarts from '../ProductsCarts'
import {FidgetSpinner} from 'react-loader-spinner'
import './index.css'

const Products=()=>{
    const [products,setProducts]=useState([])
    const [filtered,setFiteredProducts]=useState([])
    const [items,setItem]=useState(0)
    const [category,setCategory]=useState(false)
    const [hide,setHide]=useState(true)
    const [loader,setLoad]=useState(false)
    const [selectedCategories, setSelectedCategories] = useState([]);
    // const [categories,setCategories]=useState([])
    // const [ischecked,setCheck]=useState(false)

useEffect(()=>{
     const datas=async()=>{
        const response=await fetch('https://fakestoreapi.com/products')
        const data=await response.json()
        console.log(data)
        setLoad(prevState=>!prevState)
        setProducts(data);
 setFiteredProducts(data) 
    //  setLoad(true)
     }
    datas()
},[])


useEffect(()=>{
    const item=products.reduce((sum,each)=>sum+each.rating.count,0)
    setItem(item)
    },[products])
    
    const FilterHigh=()=>{
    const updated=[...filtered].sort((a,b)=>b.price-a.price)
    setFiteredProducts(updated)
  window.scrollTo({top:0,behavior:'smooth'})
    // setProducts(updated)
    }

    const FilterLow=()=>{
    const updated=[...filtered].sort((a,b)=>a.price-b.price)
    setFiteredProducts(updated)
    window.scrollTo({top:0,behavior:'smooth'})
    // setProducts(updated)
    }

    const FilterRecom=()=>{
        // const updated=[...filtered].sort((a,b)=>a.price-b.price)
       setFiteredProducts(products)
       window.scrollTo({top:0,behavior:'smooth'})
        
    }

    const button2=()=>{
        setCategory(prevState=>!prevState)
    }

    const checking = (e) => {
        const { value, checked } = e.target;
        let updated = [];
      
        if (checked) {
          updated = [...selectedCategories, value];
        } else {
          updated = selectedCategories.filter(cat => cat !== value);
        }
      
        setSelectedCategories(updated);
   
    if (updated.length === 0) {
        setFiteredProducts(products);
        return;
      }
            
                const  filtered1=products.filter(each=>{
                if(updated.includes('mens') && each.category==="men's clothing") return true
                if(updated.includes('womens') &&  each.category==="women's clothing") return true
                if(updated.includes('jewelery') &&  each.category==="jewelery") return true
                if(updated.includes('electronics') &&  each.category==="electronics") return true
                return false
            })
            setFiteredProducts(filtered1)
            console.log(filtered1)

            


            
    }
    const hides=()=>{
        setHide(prevState=>!prevState)
    }


  
return(
<div>
<hr className="hr"/>
    <div className="filter-section">

        <div className="filter-sub">
            <div className="lg-section"> 
            <p>{items} ITEMS</p>
            <div>
                {hide?<p>&lt;</p>:<p>&gt;</p>}
                <button className="bu1" onClick={hides}>{hide?<span>HIDE FILTER</span>:<span>SHOW FILTER</span>}</button>
            </div>
            </div>
            <div className="sm-section">
            <button onClick={button2} className="bu">FILTER</button>
      
            </div>
            
            <select className="selection" onChange={e=>{
               if (e.target.value==='high') FilterHigh()
                if (e.target.value==='low') FilterLow()
                if (e.target.value==='recommend') FilterRecom()
            }
            }>
                <option  value='recommend'>RECOMMENDED</option>
                <option value='high'>Price:High to Low</option>
                <option value='low'>Price:Low to High</option>
            </select>

        
            </div>
            <hr className="hr"/>
            <div className="sm-section">
              {category?
        <div className="products-cat"  >
            <div>
            <input type='checkbox' value='mens' id="mens" onChange={checking}  checked={selectedCategories.includes('mens')}/>
            <label htmlFor="mens">Men's Clothing</label>
                
            </div>
            <div>
            <input type='checkbox' value="womens" id="womens" onChange={checking}   checked={selectedCategories.includes('womens')}/>
            <label htmlFor="womens">Women's Clothing</label>
            </div>
            <div>
            <input type='checkbox' value='jewelery' id='jewelery' onChange={checking}  checked={selectedCategories.includes('jewelery')}/>
            <label htmlFor="jewelery">Jewelery</label>
        
            </div>
            <div>
            <input type='checkbox' value="electronics" id="electronics" onChange={checking}  checked={selectedCategories.includes('electronics')}/>
            <label htmlFor="electronics">Electronics</label>
            </div>
           
        </div>
        :null
}

</div>
    </div>
    <div className="section-products">
        {hide?
   <aside>
    <div>
    <h1>FILTER</h1>
        <button onClick={button2} className="bu1">CATEGORY</button>
        
        {category?
        <div className="products-cat">
            <div>
            <input type='checkbox' value='mens' id="mens" onChange={checking} checked={selectedCategories.includes('mens')}/>
            <label htmlFor="mens">Men's Clothing</label>
                
            </div>
            <div>
            <input type='checkbox' value="womens" id="womens" onChange={checking}  checked={selectedCategories.includes('womens')}/>
            <label htmlFor="womens">Women's Clothing</label>
            </div>
            <div>
            <input type='checkbox' value='jewelery' id='jewelery' onChange={checking} checked={selectedCategories.includes('jewelery')}/>
            <label htmlFor="jewelery">Jewelery</label>
        
            </div>
            <div>
            <input type='checkbox' value="electronics" id="electronics" onChange={checking} checked={selectedCategories.includes('electronics')}/>
            <label htmlFor="electronics">Electronics</label>
            </div>
           
        </div>
        :null
}
    </div>  
   </aside>
:null}
<main>
    <ul className="products-list">
   

{loader?

<div className="loader">

<FidgetSpinner color="aqua"
secondaryColor="white"
height={40}

/>
</div>
:
filtered.map(each=>
    <ProductsCarts key={each.id} product={each}/>
)
   
}
    </ul>
    </main>
    </div>
</div>
)

  
}
export default Products
