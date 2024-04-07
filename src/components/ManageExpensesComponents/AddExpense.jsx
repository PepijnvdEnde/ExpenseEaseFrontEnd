const AddExpense = () => {


    return (<>
        <div className="flex justify-center items-center border-2 border-blue-700 rounded-lg h-20">
            <p className="text-4xl text-blue-700">Add Expense</p>
        </div>
        <div className="flex justify-evenly items-center p-2 h-min space-x-4">
            <input type="text" pattern="\d+,\d{2}" placeholder="Amount" className="w-1/2 h-10 border-2 border-gray-300 p-2 truncate rounded-lg" />
            <input type="text" placeholder="Description" className="w-1/2 h-10 border-2 border-gray-300 p-2 truncate rounded-lg" />
            <select className="w-1/2 h-10 border-2 border-gray-300 p-2 bg-white truncate rounded-lg" >
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Groceries">Groceries</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Rent">Rent</option>
                <option value="Health">Health</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Insurance">Insurance</option>
                <option value="Education">Education</option>
                <option value="Gifts">Gifts</option>
                <option value="Investments">Investments</option>
                <option value="Other">Other</option>
            </select>
            <input type="date" placeholder="Date" className="w-1/2 h-10 border-2 border-gray-300 p-2 truncate rounded-lg" />
            <button className="w-1/2 h-10 border-2 border-gray-300 p-2 button-3d truncate flex items-center justify-center rounded-lg truncate">Add Expense</button>
        </div>
    </>
    );
};

export default AddExpense;