import { FaXmark  } from "react-icons/fa6";

const CategoryPopupHeader = ({setShowModal}) => {
    return (

        <div className="flex justify-between items-center p-5 border-b border-solid border-blueGray-200 rounded">
            <h3 className="text-2xl font-semibold">
                Filter
            </h3>
            <FaXmark className="font-bold 500 text-xl cursor-pointer" onClick={() => setShowModal(false)} />
        </div>

    )
}

export default CategoryPopupHeader
