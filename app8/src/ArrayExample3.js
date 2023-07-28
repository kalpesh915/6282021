import { useEffect } from "react";
import { useState } from "react";

function ArrayExample3() {
    const APIURL = "https://dummyjson.com/products";
    let [productsData, setProductsData] = useState([]);

    useEffect(()=>{
        // life cycle method imlpement in functional component
        // constructor, render, componentdidmount

        fetch(APIURL).then((result)=>{
            result.json().then((response)=>{
                setProductsData(response.products);
                //console.log(response);
            });
        });
    }, []);

    return <>
        <h1 className="bg-primary text-white p-4 text-center">Products List From Dummyjson.com</h1>
        <table className="table table-hover table-striped">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Rating</th>
                    <th>Stock</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Photo</th>
                </tr>
            </thead>

            <tbody>
                {
                    productsData.map((product, index)=> <tr key={index}>
                        {/* <td>{index}</td> */}
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.discountPercentage}</td>
                        <td>{product.rating}</td>
                        <td>{product.stock}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td><img src={product.thumbnail} className="rounded-circle w-50"></img></td>
                    </tr>)
                }
            </tbody>

            <tfoot className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Rating</th>
                    <th>Stock</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Photo</th>
                </tr>
            </tfoot>
        </table>
    </>
}

export default ArrayExample3;