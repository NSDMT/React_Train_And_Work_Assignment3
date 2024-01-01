import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDeails from "./pages/ProductDeails";
import Wishlist from "./pages/Wishlist";
import ProductList from "./components/ProductList";

function App() {
    return (
        <>
            <Header />
            <ProductList />
            {/* <Wishlist /> */}
            <Footer />
        </>
    );
}

export default App;
