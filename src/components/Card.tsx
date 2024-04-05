import { FC } from "react";

interface productDataProp {
  id: number;
  title: string;
  img: string;
  price: number;
}

const Card: FC<productDataProp> = ({ data }) => {
  const { title, img, price } = data;
  const;
  return (
    <div className="w-[250px] p-2 bg-white shadow-md border">
      <div>
        <img
          src="https://i.ytimg.com/an_webp/WEIhcn9MrdY/mqdefault_6s.webp?du=3000&sqp=CKS4vbAG&rs=AOn4CLAJ3h1dsAuMVUQTzIfiG-WnmEpgOg"
          alt=""
        />
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Card;
