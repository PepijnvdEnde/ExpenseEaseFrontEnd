const CategoryTile = ({name,amount}) => {
    return (
        <div className="text-center text-xl border-2 border-gray-300 my-1 rounded-lg w-1/3 p-2 m-3">
            <div className="border-b-2 border-gray-300">{name}</div>
            <div className="">{amount}</div>
        </div>
    );
}

export default CategoryTile;