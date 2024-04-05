// import Todo from "./components/Todo";
// import Todo01 from "./components/Todo01";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
// import TodoReduxCrud from "./components/TodoReduxCrud";

// import TodoCRUD from "./components/TodoCRUD";

const App = () => {
  const [productData, setProductData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductData(data);
    };
    fetchData();
  }, []);

  console.log(productData);

  return (
    <div>
      {/* <Todo />
      <Todo01 /> */}
      {/* <TodoCRUD /> */}
      {/* <TodoReduxCrud /> */}
      <Nav />
      <div className="grid grid-cols-4">
        {productData.map((item: any) => (
          <div key={item}>
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
