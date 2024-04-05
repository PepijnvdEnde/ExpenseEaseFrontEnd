import ReactModal from "react-modal";
import { useState } from 'react';

const EditExpenseRow = ({ amount, description, catagory, date }) => {
    const [showModal, setShowModal] = useState(false);

    const handleEdit = () => {
        console.log("Edit");
    }

    const handleRemove = () => {
        console.log("Remove");
    }

    return (<>
        <div className="text-center text-xl border-2 border-gray-300 hover:border-gray-500 h-10 flex justify-between my-1 cursor-pointer rounded-lg"
            onClick={() => setShowModal(true)}>
            <div className="text-left border-r-2 border-gray-300 px-4 w-28 flex-shrink-0">€{amount}</div>
            <div className="text-left flex-grow pl-2 overflow-hidden">{description}</div>
            <div className="text-left pl-2 overflow-hidden flex-shrink-0 border-l-2 border-gray-300 max-w-36 w-36">{catagory}</div>
            <div className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0">{date}</div>
        </div>
        <ReactModal
            isOpen={showModal}
            contentLabel="School toevoegen Modal"
            className="bg-transparent  shadow-xl border-2 border-gray-300 "
            overlayClassName="fixed inset-0 z-30 bg-gray-500 bg-opacity-50 shadow-md  flex justify-center items-center w-screen h-screen p-5 "
            ariaHideApp={false}
            onRequestClose={() => setShowModal(false)}
        >
            <div className="w-1/2 min-w-fit max-w-1/2 bg-white border-2 border-gray-300 p-5 grid grid-rows-auto h-min mb-3 rounded-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <div className="absolute -top-10 left-1 flex bg-white border-t-2 border-x-2 px-3 rounded-t-lg border-gray-300 w-36 h-10">
                    <h1 className="text-xl text-left text-black">Edit Expense</h1>
                </div>
                <div className="text-center text-xl border-2 border-gray-400 h-10 flex justify-around my-1 rounded-lg">
                    <div className="border-r-2 border-gray-300 px-4 w-28 flex-shrink-0">Amount</div>
                    <div className="text-center flex-grow pl-2 overflow-hidden">Description</div>
                    <div className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0">Catagory</div>
                    <div className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0">Date</div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                    <div className="text-center text-xl border-2 border-gray-300 h-10 flex justify-between my-1 rounded-lg">
                        <input type="text" pattern="\d+,\d{2}" placeholder={"€" + amount} className="border-r-2 border-gray-300 px-4 w-28 flex-shrink-0 rounded-l-lg" />
                        <input type="text" placeholder={description} className="text-left flex-grow pl-2 overflow-hidden" />

                        <select defaultValue={catagory} className="border-l-2 border-gray-300 bg-white px-4 w-36 flex-shrink-0 text left" >
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
                        <input type="date" className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0 rounded-r-lg" />
                    </div>
                </div>

                <div className="flex justify-evenly h-min button-3d rounded-lg my-3" onClick={() => handleRemove()}>
                    <p className="text-red-700 ">Verwijder expense</p>
                </div>

                <div className="flex justify-evenly p-2 h-min button-3d rounded-lg my-3" onClick={() => handleEdit()}>
                    <p>Save</p>
                </div>

                <div className="flex justify-evenly p-2 h-min button-3d rounded-lg mt-3" onClick={() => setShowModal(false)}>
                    <p>Close</p>
                </div>
            </div>

        </ReactModal >
    </>
    );
}

export default EditExpenseRow;