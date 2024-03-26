import React from 'react';
import Navbar from './navbar.jsx';

const CatagoriesPage = () => {
    return (
        <>
            <Navbar />
            <div className="w-screen min-h-screen bg-white flex justify-center pt-2">
                <div className="w-3/4 bg-white border-2 border-black rounded-lg pl-10 pt-10 ">
                    <h1 className="text-4xl text-left text-black text-center">Catagories</h1>
                </div>
            </div>
        </>
    );
}

export default CatagoriesPage;
