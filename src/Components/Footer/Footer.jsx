import "../../App.css";
import TopFooter from "./TopFooter";
import MidFooter from "./MidFooter";
import BotFooter from "./BotFooter";

function Footer() {
  return (
    <footer class="px-6 sm:px-[4%] 3xl:px-[10%] pb-8 3xl:pb-16 pt-8 sm:pt-[5%] relative">
      <TopFooter />
      <MidFooter />
      <BotFooter />
    </footer>
  );
}

export default Footer;
