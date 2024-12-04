import Itemproduct from "./Itemproduct";
// import Slider from "./slider";
import { useState } from "react";

export default function Home() {

  const [datas, setDatas] = useState([
    { name: "ok", email: "ok2", role: "ok3" },
    { name: "ok", email: "ok2", role: "ok3" },
    { name: "ok", email: "ok2", role: "ok3" },
    { name: "ok", email: "ok2", role: "ok3" },
    { name: "ok", email: "ok2", role: "ok3" },
  ]);

  const deleteItem = (indexToDelete) => {
    const confirmed = window.confirm("bạn có muốn xoá sản phẩm");
      if(confirmed){
        datas.splice(indexToDelete,1);
        setDatas([...datas])
      }

 
  };
  
  

  return (
    <div className="font-sans overflow-x-auto">
     
      <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
  <input
    type="email"
    placeholder="Search Something..."
    className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
  />
  <button
    type="submit"
    className="flex items-center justify-center bg-[#007bff] px-5"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.904 192.904"
      width="16px"
      className="fill-white"
    >
      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
    </svg>
  </button>
</div>


      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Joined At
            </th>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
          {datas.map((item, index) => {
            return (
              <Itemproduct
                key={index}
                {...item}
                index={index} 
                deleteItem={deleteItem}  
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
