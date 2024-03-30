const ExpenseHistory = () => {
    return (
        <>
            <div className="w-3/4 flex flex-col justify-center items-center border-2 border-black h-min p-3">
                <div className="text-4xl border-b-2 border-black w-full text-center pb-3 mb-3">History</div>
                <table className="text-left">
                    <thead className="border-b-2 border-black">
                        <tr>
                            <th className="p-2 w-min">Amount</th>
                            <th className="border-l-2  border-black  p-2 w-full">Description</th>
                            <th className="border-l-2  border-black  p-2 w-min">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2">300.00</td>
                            <td className="border-l-2 border-black p-2">Food</td>
                            <td className="border-l-2 border-black p-2">2021-09-01</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ExpenseHistory;