import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";


const ManageBudgetsModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);

    return (
        <>
            <div className='w-max h-min border-2 border-gray-300 flex justify-center rounded-lg items-center text-2xl p-3 button-3d' onClick={() => setShowModal(true)}>Manage Budgets</div>
            <ReactModal
                isOpen={showModal}
                contentLabel="School toevoegen Modal"
                className="bg-transparent z-20 shadow-xl border-2 border-gray-300 "
                overlayClassName="fixed inset-0  z-20 bg-gray-500 bg-opacity-50 shadow-md  flex justify-center items-center w-screen h-screen p-5 "
                ariaHideApp={false}
                onRequestClose={() => setShowModal(false)}
            >


                <div className="w-1/2 min-w-fit max-w-1/2 bg-white border-2 border-gray-300 p-5 grid grid-rows-auto h-min mb-3 rounded-lg fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">

                    <div className="flex justify-evenly  p-2 h-min button-3d border-2  border-gray-300 rounded-lg" onClick={() => setShowModal(false)}>
                        <p>Close</p>
                    </div>
                </div>
            </ReactModal>
        </>

    );
}

export default ManageBudgetsModal;