import { useAppSelector } from "../redux/hooks";

const Nav = () => {
  const count = useAppSelector((state) => state.cart.length);

  return (
    <div>
      <div className="sticky top-0 flex justify-between container m-auto py-5">
        <div>Shoping</div>
        <div className="cursor-pointer ">Cart</div>
        <div className="absolute bg-red-500 h-5 w-5 top-4 -right-5 rounded-full flex justify-center items-center text-white ">
          {count}
        </div>
      </div>
    </div>
  );
};

export default Nav;
