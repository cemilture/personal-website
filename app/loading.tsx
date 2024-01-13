import Image from "next/image";
import loadingImage from "./public/loadingImage.gif";

const loading = () => {
  return <Image alt="loading" src={loadingImage} />;
};

export default loading;
