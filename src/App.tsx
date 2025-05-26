import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperComponent } from "./components/swiper";
import Category from "./components/category";
import { Footer } from "./components/footer";
import { Brands } from "./components/brands";

function App() {
  return (
    <div className="space-y-10">
      <SwiperComponent />
      <Category />
      <Brands />
      <Footer />
    </div>
  );
}

export default App;
