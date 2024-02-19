import Image from "next/image";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center flex-col mt-32 p-10 gap-9">
        <div className=" flex items-center flex-1  overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-300 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6 font-bold ">
                  ORDER ID
                </th>
                <th scope="col" className="py-3 px-6 font-bold">
                  CUSTOMER
                </th>
                <th scope="col" className="py-3 px-6 font-bold">
                  ADDRESS
                </th>
                <th scope="col" className="py-3 px-6 font-bold">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody className="shadow-2xl">
              <tr className="border border-gray-550 bg-secondery hover:bg-black transition-all ">
                <td className="py-4 hover:scale-125 px-6 font-medium 
                items-center justify-center flex whitespace-nowrap hover:text-white transition-all">
                    <span>5168468178...</span>
                </td>
                <td className="py-4 px-6 font-medium  whitespace-nowrap hover:text-white transition-all hover:scale-125">
                  <span>Egemen Şahin</span>
                </td>
                <td className="py-4 px-6 font-medium  whitespace-nowrap
                 hover:text-white transition-all hover:scale-125">İstanbul</td>
                <td  className="py-4 px-6 font-medium  whitespace-nowrap
                 hover:text-white transition-all hover:scale-125">$20</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative flex justify-between w-full bg-gray-400 p-10  border-secondery shadow-2xl ">
             <div className="text-white"> <Image src="/images/paid.png" alt="" width={55} height={55} />
             <span>Payment</span></div>
             <div className="animate-bounce text-white"> <Image src="/images/bake.png" alt="" width={55} height={55} />
             <span>Preparing</span></div>
             <div className="text-white"> <Image src="/images/bike.png" alt="" width={55} height={55} />
             <span>On The Way</span></div>
             <div className="text-white"> <Image src="/images/delivered.png" alt="" width={55} height={55} />
             <span>Delivered</span></div>
             
        </div>
      </div>
    </div>
  );
};

export default Order;
