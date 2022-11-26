import {useState, useEffect} from 'react'
import {get_todo,delete_todo} from "../utils/server"


const TodoList = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getTodo();
    }, []);

    const getTodo = async () => {
        const response = await get_todo()
        setProduct(response.data);
    }

    const deleteTodo = async (id) => {
        console.log('id')
        await delete_todo(id)
        getTodo();
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
                            <button onClick={() => deleteTodo(product._id)}
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

export default TodoList