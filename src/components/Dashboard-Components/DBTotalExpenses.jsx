const TotalExpenses = () => {
    return (
        <div className="w-3/4 border-2 border-gray-300 rounded-lg h-36 px-3 m-3 overflow-auto bg-white shadow-lg">
            <div className="text-4xl w-full text-center pb-3 border-b-2 border-gray-200">Total expenses</div>
            <div className="flex justify-center items-center p-3">
                <p className="text-4xl text-center text-gray-700">€0,00</p>
            </div>
        </div>
    );
}

export default TotalExpenses;