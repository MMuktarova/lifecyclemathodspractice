function Product(props) {
    const {title,price,desc,category} = props.data
        
    return (
        <div>
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{desc}</p>
            <p>{category}</p>
        </div>
    )
}
export default Product