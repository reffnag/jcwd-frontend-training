import { useEffect } from "react"
import { useState } from "react"
import "../../css/tokobuah.css"

export function TokoBuahList() {
  const [products, setProducts] = useState([
    {
        product : "Apel" ,
        img_url : "https://cdn-brilio-net.akamaized.net/community/2018/09/12/13793/ayo-nikmati-apel-rebus-yang-ternyata-sangat-baik-untuk-kesehatan.jpg",
        price : 2000
      },
      {
        product : "Jeruk" ,
        img_url : "https://mmc.tirto.id/image/2016/08/16/TIRTO-shutterstock_115590688_ratio-16x9.JPG",
        price : 3000
      },
      {
        product : "Mangga" ,
        img_url : "https://cdn0-production-images-kly.akamaized.net/2G_AVsCgQA4pWcb3lvrDjme0oOY=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3177457/original/033868200_1594570883-ilustrasimangga.jpg",
        price : 2000
      },
      {
        product : "Pepaya" ,
        img_url : "https://cdn1-production-images-kly.akamaized.net/kLuwLh7KcFDpSr6aMBSwpmPp9dk=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3158648/original/070019300_1592734103-photo-of-papaya-beside-sliced-lime-4113802.jpg",
        price : 2000
      },
      {
        product : "Pisang" ,
        img_url : "https://cdn1-production-images-kly.akamaized.net/C18QmJ_eTDQ2fMzB1t8mEi9UPzk=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3159189/original/071968400_1592812996-yellow-banana-peels-on-white-surface-1974514.jpg",
        price : 2000
      },
      {
        product : "Anggur" ,
        img_url : "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/04/Red-grapes.jpg",
        price : 2000
      }

  ])
  const [product , setProduct] = useState({
    product : "" ,
    img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU",
    price : 0
  })

  const [search, setSearch] = useState("")


  function inputHandler(event) {
    const { value, name } = event.target;

    //event = input 
     name === "search" ? 
     setSearch(value) 
     :
    //  product : "anggur" ,
    //  img_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU",
    //  price : 0 ,

    setProduct({
      ...product,
      [name]: value,
    })
  }

  //componentDidUpdate
  useEffect(() => {
    if(product.img_url === "")
    setProduct({
        ...product,
        ["img_url"]: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWc7g5DWDOAp7pqzkLV6tSclMjZz8NSN7S9a2GzQnN5AVbDn8ohRBWV2CjnkyJSjk6tS4&usqp=CAU",
      })
  },[product.img_url])


  function addproductItem() {
    if(!product.product || !product.img_url || !product.price) return alert("please fill the data")
    else if(products.find((val)=> val.product === product.product)) return alert("you already add this product")

    setProducts([...products,product])
  }


return (
    <>
    <div className="product-list">
        <div className="input-product"  > <input className="product-search" placeholder="Search" name="search"  onChange={inputHandler} ></input> <hr/>  
    </div>
          <div className="content-product-list">
{
products?.map((val,idx) => {
    if(val.product.toLowerCase().includes(search.toLocaleLowerCase()))
    return (
  <BuahCard data={val} idx={idx} /> 
    )
  })
}
            
</div>
      </div>
      <div className="product-add">
        <input name="product" className="input-product" type={"text"} placeholder="Product Name"  onChange={inputHandler}></input>
        <img src={product.img_url} alt="product_img" style={{ width:"100%", height: "300px" }} />
        <input name="img_url" className="input-product" type={"text"} placeholder="Image URL"  onChange={inputHandler}></input>
        <input name="price" className="input-product" type={"number"} placeholder="Price"  onChange={inputHandler}></input>
        <button className="button-add-product"   onClick={addproductItem}>Add </button>
    </div>
    </>
  
)

}


export function BuahCard(props) {

  return ( 
    <> 
      <div className="product" key={props.idx}>
      <div className="product-img "> <img src={props.data.img_url}  alt="product img"/> </div>
      <div className="product-title" >{props.data.product} </div>
      <div className="product-price" >Rp.{Number(props.data.price).toLocaleString()}</div>
     </div>
   
   </>

  )
}


//mengirim data/value dari component a ke component b 
//menggunakan props 

// import si component b

// function A(){
//  return ( 
//     <div>
//         this is component a
//     <B/ name="udin" >
//     </div>

//  )    
// }

// function B(props) {
//     return (
//         <div>
//             {props.name}
//         </div>
//     )
// }