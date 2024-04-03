import { useState } from 'react';
import ReactModal from "react-modal";

const ManageExpenseModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [tab, setTab] = useState('AddExpenseTab');

    const AddExpenseTab = () => {
        return (
            <>
                <div className="flex justify-center items-center border-2 border-blue-700 rounded-lg h-20">
                    <p className="text-4xl text-blue-700">Add Expense</p>
                </div>
                <div className="flex justify-evenly items-center p-2 h-min space-x-4">
                    <input type="text" placeholder="Amount" className="w-1/2 h-10 border-2 border-black p-2 truncate rounded-lg" />
                    <input type="text" placeholder="Date" className="w-1/2 h-10 border-2 border-black p-2 truncate rounded-lg" />
                    <input type="text" placeholder="Description" className="w-1/2 h-10 border-2 border-black p-2 truncate rounded-lg" />
                    <button className="w-1/2 h-10 border-2 border-black p-2 button-3d truncate flex items-center justify-center rounded-lg">Add Expense</button>
                </div>
                <div className="flex justify-evenly  p-2 h-min button-3d border-2  border-black rounded-lg" onClick={() => setShowModal(false)}>
                    <p>Close</p>
                </div>
            </>
        );
    }

    const EditExpenseTab = () => {
        return (
            <>
                <div className="flex justify-center items-center border-2 border-blue-700 rounded-lg h-20">
                    <p className="text-4xl text-blue-700">Edit Expense</p>
                </div>
                <div className="flex justify-evenly items-center p-2 h-min space-x-4">
                    <input type="text" placeholder="Amount" className="w-1/2 h-10 border-2 border-black p-2 truncate rounded-lg" />
                    <input type="text" placeholder="Date" className="w-1/2 h-10 border-2 border-black p-2 truncate rounded-lg" />
                    <input type="text" placeholder="Description" className="w-1/2 h-10 border-2 border-black p-2 truncate rounded-lg" />
                    <button className="w-1/2 h-10 border-2 border-black p-2 button-3d truncate flex items-center justify-center rounded-lg">Edit Expense</button>
                </div>
                <div className="flex justify-evenly  p-2 h-min button-3d border-2  border-black rounded-lg" onClick={() => setShowModal(false)}>
                    <p>Close</p>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='w-max h-min border-2 border-gray-300 rounded-lg flex justify-center items-center text-2xl p-3 button-3d shadow-md' onClick={() => setShowModal(true)}>Manage Expense</div>
            <ReactModal
                isOpen={showModal}
                contentLabel="School toevoegen Modal"
                className="bg-transparent rounded-xl shadow-xl border-2 border-gray-300 "
                overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50 shadow-md rounded-xl flex justify-center items-center w-screen h-screen p-5 "
                ariaHideApp={false}
                onRequestClose={() => setShowModal(false)}
            >


                <div className="w-1/2 min-w-fit bg-white border-2 border-black p-5 grid grid-rows-3 h-min mb-3 rounded-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <div className="absolute -top-10 left-1 w-full  flex">
                        <div className="relative bg-white w-44 h-10 text-center rounded-t-lg border-x-2 border-t-2  border-black text-2xl box-border tabHover">
                            <button onClick={() => setTab('AddExpenseTab')}>Add expense</button>
                        </div>
                        <div className="relative bg-white w-44 h-10 text-center rounded-t-lg border-x-2 border-t-2  border-black text-2xl box-border tabHover">
                            <button onClick={() => setTab('EditExpenseTab')}>Edit expenses</button>
                        </div>
                    </div>
                    {tab === 'AddExpenseTab' ? <AddExpenseTab /> : <EditExpenseTab />}
                </div>
            </ReactModal>
        </>

    );
};

export default ManageExpenseModal;
