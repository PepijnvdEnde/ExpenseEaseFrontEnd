const BudgetComponent = ({ budget }) => {
    return (
        <div className="border-2 border-gray-300 rounded-lg p-2 m-2">
            <div className="border-b-2 border-gray-300 text-3xl text-center">{budget.name}</div>
            <div className="flex justify-around">
                <label className="text-xl">Set budget:</label>
                <input type="text" pattern="\d+,\d{2}" placeholder={"€" + budget.amount} className="w-1/2 h-10 border-2 border-gray-300 p-2 truncate rounded-lg" />
                <button className="w-min h-min border-2 border-gray-300 button-3d">Save</button>
            </div>
        </div>
    );
}

export default BudgetComponent;