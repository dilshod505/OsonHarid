import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperComponent } from "./components/swiper";
import Category from "./components/category";

function App() {
  return (
    <div className="">
      <SwiperComponent />
      <Category />
    </div>
  );
}

export default App;
