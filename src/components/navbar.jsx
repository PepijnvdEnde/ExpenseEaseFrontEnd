import { Component } from 'react';
import NavbarButton  from './Navbar-Components/NavbarButton.jsx';

class Navbar extends Component {
    render() {
        return (
            <nav className="sticky top-0 h-16  w-screen bg-sky-950 text-indigo-600 flex items-center justify-between border-r-2 border-indigo-600">
                <div className='flex items-center justify-between m-2'>
                    <NavbarButton name="Dashboard" link="Dashboard" />
                    <NavbarButton name="Add Expense" link="AddExpense" />
                    <NavbarButton name="Manage Expenses" link="ManageExpenses" />
                    <NavbarButton name="Categories" link="Catagories" />
                    <NavbarButton name="Reports" link="Reports" />
                </div>
                <div className='flex items-center justify-between right-0 m-3'>
                    <div className="p-2 mr-2 w-max text-white rounded text-center my-2 text-xl"> 
                    {localStorage.getItem('username')}
                    </div>

                    <NavbarButton name="Account Settings" link="Settings" />
                    <NavbarButton name="Logout" link="Login" />
                </div>
            </nav>
        );
    }
}

export default Navbar;