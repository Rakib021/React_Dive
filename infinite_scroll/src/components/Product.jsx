

export default function Product({ title, thumbnail, price }) {
    return (
       <div className="border w-50 m-4 p-4">
        <div >
          <h4>{title}</h4>
          <img src={thumbnail} alt="" />
          <p>Price : {price}</p>
        </div>
       </div>
    );
}