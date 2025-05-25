import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useReducerContext from "../../hooks/use-reducer-context";
import useToastify from "../../hooks/use-toastify";
import { Card, Col, Row } from "antd";
import { FaRegHeart } from "react-icons/fa6";

const CategoryId = () => {
  const { slug } = useParams();
  const { dispatch }: any = useReducerContext();
  const [data, setData] = useState([]);
  const { toastSuccess, toastError } = useToastify();

  useEffect(() => {
    const fetchDataHandler = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${slug}`
        );
        const data = await res.json();
        setData(data.products);
        dispatch({ type: "SET_PRODUCTS", payload: data.products });
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchDataHandler();
  }, [slug]);

  return (
    <div className="">
      <h1 className="text-3xl mb-3">{data.length} product(s)</h1>
      <Row gutter={[16, 16]}>
        {data ? (
          data.map((item: Record<string, any>) => (
            <Col key={item?.id} xs={24} sm={12} md={8} lg={6}>
              <Link to={`/product/${item.id}`}>
                <Card
                  className="w-full object-contain h-full shadow-xl"
                  cover={
                    <img
                      src={item.images[0]}
                      alt="error"
                      className={"h-[200px] pt-5 object-contain"}
                    />
                  }
                >
                  <h1>{item.name}</h1>
                  <p className="text-gray-500">{item.description}</p>
                  <span className={"text-[18px]"}>${item.price}</span>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <div>Loading</div>
        )}
      </Row>
    </div>
  );
};
export default CategoryId;
