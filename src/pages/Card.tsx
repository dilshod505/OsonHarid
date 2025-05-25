import { useContext } from "react";
import { Card, Col, Row, Modal, Input, Form, Image } from "antd";
import { MdDelete } from "react-icons/md";
import { ReducerContext } from "../use-context/reducer-context";
import { Link } from "react-router-dom";
import useToastify from "../hooks/use-toastify";

function Cart() {
  const context = useContext(ReducerContext);
  const { toastSuccess, toastError } = useToastify();

  localStorage.setItem("cart", JSON.stringify(context?.state.cart));
  localStorage.getItem("cart");

  return (
    <div className="px-28 py-16">
      <Row gutter={[16, 16]}>
        {context?.state.cart.map((item) => (
          <Col key={item.id}>
            <Card
              className="mt-14 shadow-xl"
              cover={
                <Image
                  width={300}
                  height={200}
                  src={item.images[0]}
                  alt={item.title}
                  className="h-[250px] bg-contain bg-center object-contain"
                />
              }
            >
              <div key={item.id} className={"max-w-[330px]"}>
                <h1 className={"text-2xl"}>{item.title}</h1>
                <p className={"mt-2"}>Category: {item.category}</p>
                <p className={"mb-2"}>Rating: {item.rating}</p>
                <p className={"mb-2"}>Stock: {item.stock}</p>
                <p className={"mb-2"}>Brand: {item.brand}</p>
                <p className={"mb-2"}>Discount: {item.discountPercentage}%</p>
                <p className={"mt-2"}>Price: {item.price}</p>
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="mt-5 bg-blue-500 px-20 py-1 rounded-md text-white"
                    onClick={() => toastSuccess("Buying item...")}
                  >
                    Buy
                  </button>
                  <button
                    type="button"
                    className="mt-5 bg-red-500 px-4 py-2 rounded-md text-white"
                    onClick={() => {
                      context?.dispatch({
                        type: "DELETE_FROM_CART",
                        payload: item.id,
                      });
                      toastError("Product deleted from cart");
                    }}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cart;
