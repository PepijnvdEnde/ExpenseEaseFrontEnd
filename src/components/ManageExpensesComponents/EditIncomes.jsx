import React from 'react';
import EditIncomeRow from './EditIncomeRow';

const EditIncomes = () => {
    return (<>
        <div className="flex justify-center items-center border-2 border-blue-700 rounded-lg h-20">
            <p className="text-4xl text-blue-700">Edit Incomes</p>
        </div>
        <div className="text-center text-xl border-2 border-gray-400 h-10 flex justify-around my-1 rounded-lg">
            <div className="border-r-2 border-gray-300 px-4 w-28 flex-shrink-0">Amount</div>
            <div className="text-center flex-grow pl-2 overflow-hidden">Description</div>
            <div className="border-l-2 border-gray-300 px-4 w-36 flex-shrink-0">Date</div>
        </div>
        <div className="max-h-96 overflow-y-auto">
            <EditIncomeRow amount="3,29" description="Lunch" catagory="Food & Dining" date="10-03-2024" />
            <EditIncomeRow amount="16,24" description="Trein tickets" catagory="Transportation" date="05-04-2024" />
            <EditIncomeRow amount="3,68" description="Plus run" catagory="Groceries" date="01-05-2024" />
            <EditIncomeRow amount="10,99" description="Film" catagory="Entertainment" date="10-06-2024" />
            <EditIncomeRow amount="120,23" description="Rent 05/04/2024" catagory="Rent" date="15-07-2024" />
            <EditIncomeRow amount="12,54" description="Haar gel" catagory="Health" date="20-08-2024" />
            <EditIncomeRow amount="90,54" description="Schoenen" catagory="Shopping" date="25-09-2024" />
            <EditIncomeRow amount="523,87" description="vakantie 2024" catagory="Travel" date="30-10-2024" />
            <EditIncomeRow amount="2,39" description="chips" catagory="Personal Care" date="05-11-2024" />
            <EditIncomeRow amount="109,29" description="Auto vergoeding" catagory="Insurance" date="10-12-2024" />
            <EditIncomeRow amount="2523,98" description="Studiegeld" catagory="Education" date="15-01-2025" />
            <EditIncomeRow amount="100,00" description="Team seas" catagory="Gifts" date="20-02-2025" />
            <EditIncomeRow amount="50,00" description="Reddit aandelen" catagory="Investments" date="25-03-2025" />
        </div>
    </>
    );
}

export default EditIncomes;