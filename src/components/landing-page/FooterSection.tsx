import CallToAction from "./CallToAction";
import Footer from "../layout/Footer";

const FooterSection = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary-light">
      <div className="h-[66vh]">
        <CallToAction />
      </div>
      <div className="h-[34vh]">
        <Footer />
      </div>
    </div>
  );
}

export default FooterSection;
