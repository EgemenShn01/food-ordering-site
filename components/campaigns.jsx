import Image from "next/image";
import Title from "./ui/Titles";
import { FaShoppingCart } from "react-icons/fa";
const CampaignItem = ({image,title,price}) => {
  return (
    <div className="  bg-secondery flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-2">
      <div
        className="  sm:w-40 sm:h-40  w-40 h-40 relative after:content-['']  
      border-[5px] rounded-full border-white overflow-hidden flex "
      >
        <Image
          src={image}
          alt=""
          layout="fill"
          className="hover:scale-110 transition-all"
          objectFit="cover"
        />  
      </div>
      <div className="text-white">
        <Title addClass="text-2xl ">{title} </Title>
        <div className="font-dancing my-[2px]">
          <span className="text-[40px] ml-1 ">{price}</span>
          <span className="text-sm inline-block ml-[1px]">Off</span>
        </div>
        <button className="btn-primary flex items-center  gap-x-2" >
          Order Now <FaShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};
const Campaigns = () => {
  const dummyData=[
    {
      id:1,
      image:"/images/o1.jpg",
      title:"Tuesday pizza",
      price:"$20"
    },
    {
      id:2,
      image:"/images/o2.jpg",
      title:"Good pizza",
      price:"$15"
    }
  ]
  return (
    <div className="flex justify-between container mx-auto py-20 gap-12  flex-wrap">
       { dummyData.map((item,id)=>(
        <CampaignItem 
         key={id}
        image={item.image} 
        title={item.title}
        price={item.price}
        />
       ))

       }
      
    </div>
  );
};

export default Campaigns;
