import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Badge, Button, Drawer } from "antd";
import Search from "antd/es/input/Search";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReducerContext } from "../use-context/reducer-context";
import { useRouterPush } from "../hooks/use-router-push";
import { useLocationParams } from "../hooks/use-location-params";
import { LuLogOut } from "react-icons/lu";
import { FiLogIn } from "react-icons/fi";
import { HiMiniBars3 } from "react-icons/hi2";
import { AiOutlineBars } from "react-icons/ai";


function Header() {
  const context = useContext(ReducerContext);
  const cardCount = context?.state.cart.length || 0;
  const { push } = useRouterPush();
  const { query } = useLocationParams();
  const [search, setSearch] = useState(String(query.search || ""));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const searchResult = (value) => {
    setLoading(true);
    setSearch(value);
    push({
      path: "/",
      query: {
        ...query,
        search: value,
      },
    });
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
    onClose();
  };

  return (
    <div className="mb-28">
      <div className="py-4 px-24 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-14">
          <Link to={"/"}>
            <button
              type="submit"
              className="flex items-center justify-center gap-5"
            >
              <img src="/public/images/next-store.svg" alt="logo" />
            </button>
          </Link>
          <div>
            <Link to={"/categories"} className="hidden md:flex">
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-red-500 to-blue-500 group">
                <AiOutlineBars className="group-hover:rotate-180 transition-transform duration-300" size={20} />
                <span>KATALOG</span>
              </span>
            </Link>
          </div>
        </div>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={searchResult}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          loading={loading}
          enterButton
          className="w-[600px]"
        />
        <div className="hidden md:flex items-center gap-5">
          <Link to={"/favorites"}>
            <div className="flex items-center gap-2">
              <span className="flex items-center rounded-full text-blue-600 bg-[#ecf3ff] px-3 py-3 cursor-pointer">
                <FaRegHeart size={20} />
              </span>
            </div>
          </Link>
          <Link to={"/card"}>
            <Badge count={cardCount}>
              <div className="flex items-center rounded-full text-blue-600 bg-[#ecf3ff] px-3 py-3 cursor-pointer">
                <button>
                  <FaShoppingCart size={20} />
                </button>
              </div>
            </Badge>
          </Link>
          <div>
            {isLoggedIn ? (
              <Button
                className="px-6 py-2 bg-red-500 text-white"
                onClick={handleLogout}
              >
                Logout
                <LuLogOut className="gap-3" />
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button type="primary" className="px-6 py-2 ">
                  Login
                  <FiLogIn className="gap-3" />
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="md:hidden">
          <span onClick={showDrawer} className="cursor-pointer">
            <HiMiniBars3 size={26} />
          </span>
        </div>
      </div>
      <Drawer
        title="Next Store"
        placement="right"
        onClose={onClose}
        open={open}
        footer={
          <div className="flex flex-col gap-4 mb-3">
            {isLoggedIn ? (
              <Button
                className="px-6 py-2 bg-red-500 text-white"
                onClick={handleLogout}
              >
                Logout
                <LuLogOut className="gap-3" />
              </Button>
            ) : (
              <Link to={"/login"} onClick={onClose}>
                <Button type="primary" className="px-6 py-2 ">
                  Login
                  <FiLogIn className="gap-3" />
                </Button>
              </Link>
            )}
          </div>
        }
      >
        <div className="flex flex-col gap-4">
          <Link to={"/card"} onClick={onClose}>
            <Badge count={cardCount}>
              <div className="items-center gap-2">
                <FaShoppingCart size={26} />
              </div>
            </Badge>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
export default Header;
