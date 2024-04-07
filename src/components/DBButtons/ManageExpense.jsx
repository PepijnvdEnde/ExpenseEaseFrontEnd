import { useState, useEffect} from 'react';
import ReactModal from "react-modal";
import AddExpense from '../ManageExpensesComponents/AddExpense';
import EditExpense from '../ManageExpensesComponents/EditExpense';

const ManageExpenseModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [tab, setTab] = useState('AddExpenseTab');
    
    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [showModal]);

    return (
        <>
            <div className='w-max h-min border-2 border-gray-300 flex justify-center rounded-lg items-center text-2xl p-3 button-3d' onClick={() => setShowModal(true)}>Manage Expenses</div>
            <ReactModal
                isOpen={showModal}
                contentLabel="School toevoegen Modal"
                className="bg-transparent"
                overlayClassName="fixed inset-0 z-20 bg-gray-500 bg-opacity-50 w-screen h-screen"
                ariaHideApp={false}
                onRequestClose={() => setShowModal(false)}
            >


                <div className="w-1/2 min-w-fit max-w-1/2 bg-white/100 border-2 border-gray-300 p-5 grid grid-rows-auto h-min mb-3 rounded-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <div className="relative -top-16 left-1 w-full flex">
                        <div className="relative bg-white/100 w-44 h-11 text-center rounded-t-lg border-x-2 border-t-2 border-gray-300 text-xl box-border truncate"
                            style={tab === 'AddExpenseTab' ? {} : { borderBottom: '2px solid #d1d5db' }}>
                            <button onClick={() => setTab('AddExpenseTab')}>Add expense</button>
                        </div>
                        <div className="relative bg-white/100  w-44 h-11 text-center rounded-t-lg border-x-2 border-t-2 border-gray-300 text-xl box-border truncate"
                            style={tab === 'EditExpenseTab' ? {} : { borderBottom: '2px solid #d1d5db'}}>
                            <button onClick={() => setTab('EditExpenseTab')}>Edit expenses</button>
                        </div>
                    </div>
                    {tab === 'AddExpenseTab' ? <AddExpense /> : <EditExpense />}
                    <div className="flex justify-evenly  p-2 h-min button-3d border-2  border-gray-300 rounded-lg" onClick={() => setShowModal(false)}>
                    <p>Close</p>
                </div>
                </div>
            </ReactModal>
        </>

    );
};

export default ManageExpenseModal;
