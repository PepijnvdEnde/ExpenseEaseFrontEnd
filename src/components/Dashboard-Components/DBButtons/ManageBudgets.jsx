import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import BudgetComponent from "../ManageBudgetsComponents/BudgetComponent";


const ManageBudgetsModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [showModal]);

    return (
        <>
            <div className='w-max h-min border-2 border-gray-300 flex justify-center rounded-lg items-center text-2xl p-3 button-3d' onClick={() => setShowModal(true)}>Manage Budgets</div>
            <ReactModal
                isOpen={showModal}
                contentLabel="Manage expense Modal"
                className="bg-transparent"
                overlayClassName="fixed inset-0 z-20 bg-gray-500 bg-opacity-50 w-screen h-screen"
                ariaHideApp={false}
                onRequestClose={() => setShowModal(false)}
            >


                <div className="w-1/2 min-w-fit max-w-1/2 m- bg-white/100 border-2 border-gray-300 px-5 pb-5 grid grid-rows-auto h-min mb-3 rounded-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                    <div className="relative -top-11 left-1 w-full flex">
                        <div className="relative bg-white/100 w-44 h-11 text-center rounded-t-lg border-x-2 border-t-2 border-gray-300 text-xl box-border truncate">
                            <div>Manage budgets</div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center border-2 border-blue-700 rounded-lg h-20 my-1">
                        <p className="text-4xl text-blue-700">Manage budgets</p>
                    </div>
                    <div className="flex justify-evenly flex-wrap items-center p-2 h-min space-x-4 overflow-y-auto max-h-96">
                        <BudgetComponent budget={{ name: "Food", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Transportation", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Groceries", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Entertainment", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Rent", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Health", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Shopping", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Travel", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Personal Care", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Insurance", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Education", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Gifts", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Investments", amount: 100 }} />
                        <BudgetComponent budget={{ name: "Other", amount: 100 }} />
                     </div>


                    <div className="flex justify-evenly  p-2 h-min button-3d border-2  border-gray-300 rounded-lg" onClick={() => setShowModal(false)}>
                        <p>Close</p>
                    </div>
                </div>
            </ReactModal>
        </>

    );
}

export default ManageBudgetsModal;