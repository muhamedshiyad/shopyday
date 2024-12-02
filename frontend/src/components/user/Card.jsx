import { Link } from "react-router-dom"

export const ProductCard = ({product}) => {
    return (
      <div className=" px-9 py-5 card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={product?.image}alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.title}</h2>
          <p>{product?.price}</p>
          <div className="card-actions justify-end">
            <Link to={`/productDetails/${product?._id}`}>
            <button class="btn  btn-primary btn-outline">More details</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
