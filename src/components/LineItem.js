import { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import AppContext from '../context/AppContext';

const LineItem = ({ item }) => {
    const { handleCheckBox, handleDelete } = useContext(AppContext);
    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => handleCheckBox(item.id)}
                checked={item.checked}
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheckBox(item.id)}
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItem
