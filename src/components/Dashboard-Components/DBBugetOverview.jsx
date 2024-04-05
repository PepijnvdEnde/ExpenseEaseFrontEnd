import BugetTile from "./BugetTile";
const BugetOverview = () => {
    return (
        <div className="w-3/4 border-2 border-gray-300 rounded-lg h-min px-3 m-3 overflow-auto shadow-lg py-3">
            <div className="text-4xl w-full text-center pb-3 border-b-2 border-gray-200">Budget overview</div>
            <div className="text-center p-3 text-2xl text-gray-700 flex flex-wrap justify-center">
                <BugetTile name="Food" amount="0,00" buget="0,00" />
                <BugetTile name="Transportation" amount="10,00" buget="10,00" />
                <BugetTile name="Groceries" amount="100,00" buget="100,00" />
                <BugetTile name="Entertainment" amount="1000,00" buget="1000,00" />
                <BugetTile name="Rent" amount="10000,00" buget="10000,00" />
                <BugetTile name="Health" amount="0,00" buget="100,00" />
                <BugetTile name="Shopping" amount="0,00" buget="100,00" />
                <BugetTile name="Travel" amount="0,00" buget="100,00" />
                <BugetTile name="Personal Care" amount="0,00" buget="100,00" />
                <BugetTile name="Insurance" amount="0,00" buget="100,00" />
                <BugetTile name="Education" amount="0,00" buget="100,00" />
                <BugetTile name="Gifts" amount="0,00" buget="100,00" />
                <BugetTile name="Investments" amount="0,00" buget="100,00" />
                <BugetTile name="Other" amount="0,00" buget="100,00" />
            </div>
        </div>

    );
}

export default BugetOverview;