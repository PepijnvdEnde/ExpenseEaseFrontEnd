import { useState } from 'react';
import ReactModal from "react-modal";

const AddExpenseModal = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <div className='w-max h-min border-2 border-black flex justify-center items-center text-2xl p-3 button-3d' onClick={openModal}>Add Expense</div>

            <ReactModal isOpen={showModal}
                contentLabel="School toevoegen Modal"
                className="bg-transparent rounded-xl shadow-xl border-2 border-gray-300 "
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50 shadow-md rounded-xl flex justify-center
                                 items-center w-screen h-screen p-5 "
                ariaHideApp={false}
                onRequestClose={() => setShowModal(false)}
            >

                <div className=" flex flex-col items-center w-screen min-h-screen bg-transparent pt-2 ">
                    <div className="w-1/2 min-w-fit bg-white border-2 border-black p-5 grid grid-rows-3 h-min mb-3 fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                        <div className="flex justify-center items-center border-2 border-blue-700 h-20">
                            <p className="text-4xl text-blue-700">Add Expense</p>
                            
                        </div>
                        <div className="flex justify-evenly items-center p-2 h-min space-x-4">
                            <input type="text" placeholder="Amount" className="w-1/2 h-10 border-2 border-black p-2 truncate" />
                            <input type="text" placeholder="Date" className="w-1/2 h-10 border-2 border-black p-2 truncate" />
                            <input type="text" placeholder="Description" className="w-1/2 h-10 border-2 border-black p-2 truncate" />
                            <button className="w-1/2 h-10 border-2 border-black p-2 button-3d truncate ">Add Expense</button>
                        </div>
                        <div className="flex justify-evenly items-center p-2 h-min button-3d border-2  border-black" onClick={() => setShowModal(false)}>
                            <p>Close</p>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </>
    );
};

export default AddExpenseModal;
