import { FaXmark  } from "react-icons/fa6";

const categoryPopup = ({ setShowModal }) => {
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-11/12 my-6 mx-auto md:w-96">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex justify-between items-center p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-semibold">
                Filter
              </h3>
              <FaXmark className="font-bold 500 text-xl" onClick={() => setShowModal(false)} />
             
            </div>
            {/*body*/}
            <div className="relative flex-auto">
                <div className="bg-white rounded px-6 pt-4 pb-3">
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" >
                      Price
                    </label>
                    <div className="flex gap-2">
                    <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Min" />
                    <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder="Max" />
                    </div>
                  </div>
                  <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-2" >
                      Size
                    </label>
                    <div className="w-full flex flex-wrap justify-center gap-3">
                      <div className="shadow appearance-none border rounded py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                      <div className="shadow appearance-none border rounded py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                      <div className="shadow appearance-none border rounded py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                      <div className="shadow appearance-none border rounded py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                      <div className="shadow appearance-none border rounded py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                      <div className="shadow appearance-none border rounded py-2 px-2 text-black leading-tight focus:outline-none focus:shadow-outline">32</div>
                    </div>
                  </div>
                </div>  
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}

export default categoryPopup