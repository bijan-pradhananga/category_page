const CategoryPopupFooter = ({ setShowModal }) => {
    return (

        <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
            <button
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
            >
                Apply
            </button>
        </div>

    )
}

export default CategoryPopupFooter