import CategoryTile from "./CategoryTile";
const CategoryExpenses = () => {
    return (
        <div className="w-3/4  border-2 border-gray-300 rounded-lg h-min px-3 m-3 overflow-auto bg-white shadow-lg py-3 top-0">
            <div className="text-4xl text-center border-b-2 border-gray-200 pb-3 w-full">Category Expenses</div>
            <div className="text-center p-3 text-2xl text-gray-700 flex flex-wrap justify-center">
                <CategoryTile name="Food" amount="€0,00" />
                <CategoryTile name="Transportation" amount="€10,00" />
                <CategoryTile name="Groceries" amount="€100,00" />
                <CategoryTile name="Entertainment" amount="€1000,00" />
                <CategoryTile name="Rent" amount="€10000,00" />
                <CategoryTile name="Health" amount="€0,00" />
                <CategoryTile name="Shopping" amount="€0,00" />
                <CategoryTile name="Travel" amount="€0,00" />
                <CategoryTile name="Personal Care" amount="€0,00" />
                <CategoryTile name="Insurance" amount="€0,00" />
                <CategoryTile name="Education" amount="€0,00" />
                <CategoryTile name="Gifts" amount="€0,00" />
                <CategoryTile name="Investment" amount="€0,00" />
                <CategoryTile name="Other" amount="€0,00" />
            </div>
        </div>
    );
}

export default CategoryExpenses;