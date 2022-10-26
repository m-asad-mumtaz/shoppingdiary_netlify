import { createContext, useState, useEffect } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        localStorage.setItem('shoppinglist', JSON.stringify(items));
    }, [items])

    const addItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, checked: false, item };
        const listItems = [...items, myNewItem];
        setItems(listItems);
    }

    const handleCheckBox = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        addItem(newItem);
        setNewItem('');
    }

    let length = items.length;

    return (
        <AppContext.Provider value={{
            newItem, setNewItem, handleSubmit,
            items,
            handleCheckBox, handleDelete,
            search, setSearch, length,
        }}>
            {children}
        </AppContext.Provider >
    )
}

export default AppContext;