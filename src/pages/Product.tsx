import { useContext } from "react";
import { Card, Col, Row, Spin } from "antd";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ReducerContext } from "../use-context/reducer-context";

function Product() {
  const context = useContext(ReducerContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="mt-28">
      {!isLoggedIn && (
        <p className="text-center text-red-500 mt-6 mb-8 text-lg">
          Mahsulotlarni xarid qilish uchun iltimos, <Link className="text-blue-400" to="/login">Login</Link>{" "}
          qiling.
        </p>
      )}
      <Row gutter={[32, 32]}>
        {context?.state.products.map((product: Record<string, any>) => (
          <Col key={product.id} span={6} xl={6} lg={6} md={8} sm={12} xs={24}>
            {/* Link faqat login bo‘lganda ishlaydi */}
            {isLoggedIn ? (
              <Link to={`/product/${product.id}`}>
                <Card
                  hoverable
                  className="h-full"
                  cover={
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="h-[200px] bg-contain bg-center object-contain"
                    />
                  }
                >
                  <Card.Meta
                    title={product.title}
                    description={product.description}
                  />
                  <span className="text-2xl">${product.price}</span>
                </Card>
              </Link>
            ) : (
              <Card
                hoverable={false}
                className="h-full opacity-50 cursor-not-allowed"
                cover={
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-[200px] bg-contain bg-center object-contain"
                  />
                }
              >
                <Card.Meta
                  title={product.title}
                  description={"Login qiling — tafsilotlar mavjud emas"}
                />
                <span className="text-2xl">${product.price}</span>
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Product;
