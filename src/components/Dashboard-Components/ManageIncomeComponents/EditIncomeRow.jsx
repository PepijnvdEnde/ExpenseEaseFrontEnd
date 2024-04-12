import ReactModal from "react-modal";
import { useState } from 'react';

const EditIncomeRow = ({ amount, description, catagory, date }) => {
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
            <div className="text-left border-r-2 border-gray-300 px-4 w-32 flex-shrink-0">+ €{amount}</div>
            <div className="text-left flex-grow pl-2 overflow-hidden">{description}</div>
            <div className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0">{date}</div>
        </div>
        <ReactModal
            isOpen={showModal}
            contentLabel="Edit Income Modal"
            className="bg-transparent shadow-xl border-2 border-gray-300 "
            overlayClassName="fixed inset-0 z-30 bg-gray-500 bg-opacity-50 shadow-md  flex justify-center items-center w-screen h-screen p-5 "
            ariaHideApp={false}
            onRequestClose={() => setShowModal(false)}
        >
            <div className="w-1/2 min-w-fit max-w-1/2 bg-white/100 border-2 border-gray-300 p-5 grid grid-rows-auto h-min mb-3 rounded-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <div className="relative -top-16 left-1 flex bg-white/100 border-t-2 border-x-2 px-3 rounded-t-lg border-gray-300 w-36 h-11">
                    <h1 className="text-xl text-left text-black">Edit Income</h1>
                </div>
                <div className="text-center text-xl border-2 border-gray-400 h-10 flex justify-around my-1 rounded-lg">
                    <div className="border-r-2 border-gray-300 px-4 w-28 flex-shrink-0">Amount</div>
                    <div className="text-center flex-grow pl-2 overflow-hidden">Description</div>
                    <div className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0">Date</div>
                </div>
                <div className="max-h-96 overflow-y-auto">
                    <div className="text-center text-xl border-2 border-gray-300 h-10 flex justify-between my-1 rounded-lg">
                        <input type="text" pattern="\d+,\d{2}" placeholder={"€" + amount} className="border-r-2 border-gray-300 px-4 w-28 flex-shrink-0 rounded-l-lg" />
                        <input type="text" placeholder={description} className="text-left flex-grow pl-2 overflow-hidden" />
                        <input type="date" className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0 rounded-r-lg" />
                    </div>
                </div>

                <div className="flex justify-evenly h-min button-3d rounded-lg my-3" onClick={() => handleRemove()}>
                    <p className="text-red-700 ">Verwijder income</p>
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

export default EditIncomeRow;