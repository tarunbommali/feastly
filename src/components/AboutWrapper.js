import { useParams } from "react-router-dom";
import About from "./About";
const AboutWrapper = () => {
  const { tabId } = useParams();
  return <About initialTab={tabId || "profile"} />;
};

export default AboutWrapper;
