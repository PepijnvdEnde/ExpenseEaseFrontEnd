import { Component } from "react";
import Navbar from './navbar.jsx';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "EUR",
            amount: 0
        };
    }

    handleCurrencyChange = (event) => {
        this.setState({ currency: event.target.value });
    }

    handleAmountChange = (event) => {
        this.setState({ amount: event.target.value });
    }

    getCurrencySymbol = (currency) => {
        const symbols = {
            USD: "$",
            CAD: "CA$",
            EUR: "€"
        };
        return symbols[currency] || "";
    }

    render() {
        const { currency, amount } = this.state;
        const currencySymbol = this.getCurrencySymbol(currency);

        return (
            <>
                <Navbar />
                <div className="w-screen min-h-screen bg-gray-600 flex justify-center pt-2">
                    <div className="w-3/4 bg-indigo-600 rounded-lg pl-10 pt-10 ">
                        <h1 className="text-4xl text-left text-white ">Home</h1>
                        <form className="flex flex-col  border-2 border-blue-500">
                            <label className="text-white" htmlFor="expense">Expense</label>
                            <input className="rounded-md w-72 p-1" type="text" id="expense" placeholder="Groceries" name="expense" />
                            <label className="text-white" htmlFor="amount">Amount</label>
                            <div className="inline-flex w-72">
                                <p className="bg-white rounded-l-md p-1">{currencySymbol}</p>
                                <input className="w-fit" type="number" id="amount" placeholder="0.00" name="amount" min="0" step onChange={this.handleAmountChange} />
                                <div className="inset-y-0 right-0 flex items-center">
                                    <label htmlFor="currency" className="sr-only">Currency</label>
                                    <select id="currency" name="currency" className="h-full rounded-r-md border-0 bg-white py-0 pl-2 pr-7 text-gray-500" value={currency} onChange={this.handleCurrencyChange}>
                                        <option value="USD">USD</option>
                                        <option value="CAD">CAD</option>
                                        <option value="EUR">EUR</option>
                                    </select>
                                </div>
                            </div>
                            <label className="text-white" htmlFor="date">Date</label>
                            <input className="rounded-md w-72 p-1" type="date" id="date" name="date" />
                            <button className="bg-blue-500 rounded-md text-white w-72 mt-3" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default HomePage;

