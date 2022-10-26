import { useContext } from "react";
import AppContext from "../context/AppContext";


const Footer = () => {
    const { items } = useContext(AppContext);
    return (
        <footer>
            <h4>Total {items.length} Listed {items.length === 1 ? "Item" : "Items"}</h4>
        </footer>
    )
}

export default Footer
