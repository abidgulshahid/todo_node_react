import {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

const ProductList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/api/get_todo');
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {
        console.log('id')
        await axios.delete(`http://localhost:5000/api/${id}`);
        getProducts();
    }

    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.task_name}</td>
                        <td>
                            <button onClick={() => deleteProduct(product._id)}
                                    className="button is-small is-danger">Delete
                            </button>

                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}

export default ProductList