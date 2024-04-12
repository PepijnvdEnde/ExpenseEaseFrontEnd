const AddIncome = () => {
    return (<>
        <div className="flex justify-center items-center border-2 border-blue-700 rounded-lg h-20">
            <p className="text-4xl text-blue-700">Add Income</p>
        </div>
        <div className="flex justify-evenly items-center p-2 h-min space-x-4">
            <input type="text" pattern="\d+,\d{2}" placeholder="Amount" className="w-1/2 h-10 border-2 border-gray-300 p-2 truncate rounded-lg" />
            <input type="text" placeholder="Description" className="w-1/2 h-10 border-2 border-gray-300 p-2 truncate rounded-lg" />

            <input type="date" placeholder="Date" className="w-1/2 h-10 border-2 border-gray-300 p-2 truncate rounded-lg" />
            <button className="w-1/2 h-10 border-2 border-gray-300 p-2 button-3d truncate flex items-center justify-center rounded-lg truncate">Add Income</button>
        </div>
    </>
    );
};

export default AddIncome;