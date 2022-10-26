import { useContext } from 'react';
import AppContext from '../context/AppContext';
import ItemList from './ItemList';

const Content = () => {
    const { items, search } = useContext(AppContext);
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content
