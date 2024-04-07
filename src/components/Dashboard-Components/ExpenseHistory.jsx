
const ExpensesHistory = () => {
    return (
        <div className="w-full border-2 border-gray-300 rounded-lg h-min px-3 m-3 overflow-auto shadow-lg py-3">
            <div className="text-4xl w-full text-center pb-3 border-b-2 border-gray-200">Expenses history</div>

            <div className="text-center p-3 text-2xl text-gray-700 flex flex-wrap justify-center">
                <div className="border-2 border-gray-300 rounded-lg w-full px-2 pb-3 my-2">
                    <div className="text-2xl text-gray-700 border-b-2 border-gray-300 pl-2 text-left">07-04-2024</div>
                    <div className="flex justify-between items-center p-2 border-b-2 border-gray-300">
                        <div className="text-xl text-gray-700 px-3 border-r-2 border-gray-300">€10,00</div>
                        <div className="text-xl text-gray-700 px-3 text-left flex-grow">Description</div>
                        <div className="text-xl text-gray-700 px-3 border-l-2 border-gray-300 min-w-40 flex-shrink-0">Entertainment</div>

                    </div>
                    <div className="flex justify-between items-center p-2 border-b-2 border-gray-300">
                        <div className="text-xl text-gray-700 px-3 border-r-2 border-gray-300">€10,00</div>
                        <div className="text-xl text-gray-700 px-3 text-left flex-grow">Description</div>
                        <div className="text-xl text-gray-700 px-3 border-l-2 border-gray-300 min-w-40 flex-shrink-0">Transportation</div>
                    </div>
                </div>

                <div className="border-2 border-gray-300 rounded-lg w-full px-2 pb-3 my-2">
                    <div className="text-2xl text-gray-700 border-b-2 border-gray-300 pl-2 text-left">07-04-2024</div>
                    <div className="flex justify-between items-center p-2 border-b-2 border-gray-300">
                        <div className="text-xl text-gray-700 px-3 border-r-2 border-gray-300">€10,00</div>
                        <div className="text-xl text-gray-700 px-3 text-left flex-grow">Description</div>
                        <div className="text-xl text-gray-700 px-3 border-l-2 border-gray-300 min-w-40 flex-shrink-0">Entertainment</div>

                    </div>
                    <div className="flex justify-between items-center p-2 border-b-2 border-gray-300">
                        <div className="text-xl text-gray-700 px-3 border-r-2 border-gray-300">€10,00</div>
                        <div className="text-xl text-gray-700 px-3 text-left flex-grow">Description</div>
                        <div className="text-xl text-gray-700 px-3 border-l-2 border-gray-300 min-w-40 flex-shrink-0">Transportation</div>
                    </div>
                </div>
                <div className="border-2 border-gray-300 rounded-lg w-full px-2 pb-3 my-2">
                    <div className="text-2xl text-gray-700 border-b-2 border-gray-300 pl-2 text-left">07-04-2024</div>
                    <div className="flex justify-between items-center p-2 border-b-2 border-gray-300">
                        <div className="text-xl text-gray-700 px-3 border-r-2 border-gray-300">€10,00</div>
                        <div className="text-xl text-gray-700 px-3 text-left flex-grow">Description</div>
                        <div className="text-xl text-gray-700 px-3 border-l-2 border-gray-300 min-w-40 flex-shrink-0">Entertainment</div>

                    </div>
                    <div className="flex justify-between items-center p-2 border-b-2 border-gray-300">
                        <div className="text-xl text-gray-700 px-3 border-r-2 border-gray-300">€10,00</div>
                        <div className="text-xl text-gray-700 px-3 text-left flex-grow">Description</div>
                        <div className="text-xl text-gray-700 px-3 border-l-2 border-gray-300 min-w-40 flex-shrink-0">Transportation</div>
                    </div>
                </div>
                

                <button className="w-1/2 h-10 border-2 border-gray-300 rounded-lg flex justify-center items-center text-2xl p-3 button-3d shadow-md my-3">Show more</button>
                
            </div>
        </div>

    );
}

export default ExpensesHistory;