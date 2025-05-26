import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Spin, Image, Modal, Form, Input } from "antd";
import { FaCartShopping } from "react-icons/fa6";
import { ReducerContext } from "../use-context/reducer-context";
import useToastify from "../hooks/use-toastify";

function ProductDetail() {
  const context = useContext(ReducerContext);
  const { toastSuccess, toastError } = useToastify();
  const { id } = useParams();
  const [product, setProduct] = useState<Record<string, any> | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchProductById = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setSelectedImage(data.images[0]);
    };

    fetchProductById();
  }, [id]);

  if (!product) {
    return (
      <div className={"flex justify-center items-center h-screen"}>
        <Spin size={"large"} />
      </div>
    );
  }

  const buyProduct = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
    }, 2000);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: Record<string, any>) => {
    toastSuccess("Buying item...");

    try {
      const telegramBotToken = "7510974924:AAEL6AyXD3FFa8nrelTDaW6uwa0zAz6lAb0";
      const chatId = "2142298432";
      const text = `
      Ism: ${values.fullName}\n
      Telefon raqam: ${values.phone}\n
      Manzil: ${values.address}\n
`;
      const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log("Message sent to Telegram:", data);
          form.resetFields();
          toastSuccess("messages.success");
        })
        .catch((error) => {
          console.error("Error sending to Telegram:", error);
          toastError("messages.error");
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={"container mx-auto py-28 px-28"}>
      <Card className={"shadow-xl rounded-lg mt-10"}>
        <div className={"flex gap-8"}>
          <div className={"w-1/2"}>
            <Image
              width={400}
              height={500}
              src={selectedImage}
              alt={product.title}
              className={"w-full h-[400px] object-contain"}
            />
            <div className={"flex gap-3 mt-4"}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} - ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  style={{
                    width: "50px",
                    height: "50px",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                />
              ))}
            </div>
          </div>
          <div className={"w-1/2"}>
            <h1 className={"text-2xl font-bold mb-4"}>{product.title}</h1>
            <p className={"mb-2"}>{product.description}</p>
            <p className={"mb-2"}>Price: ${product.price}</p>
            <p className={"mb-2"}>Category: {product.category}</p>
            <p className={"mb-2"}>Rating: {product.rating}</p>
            <p className={"mb-2"}>Stock: {product.stock}</p>
            <p className={"mb-2"}>Brand: {product.brand}</p>
            <p className={"mb-2"}>Discount: {product.discountPercentage}%</p>
            <div className={"flex gap-3"}>
              <Button
                type="primary"
                onClick={() => {
                  context?.dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                  toastSuccess("Added to cart");
                }}
                className={"mt-6 w-full flex items-center justify-center gap-2"}
              >
                <FaCartShopping size={20} />
                Add to cart
              </Button>
              <Button
                onClick={buyProduct}
                className="bg-green-600 text-white mt-6 w-full flex items-center justify-center gap-2"
              >
                <FaCartShopping size={20} />
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <Modal
        title="Buy Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Ism"
            required
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Telefon raqam"
            name="phone"
            required
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Manzilni kiriting"
            name="address"
            required
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ProductDetail;
