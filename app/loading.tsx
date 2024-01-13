import Image from "next/image";
import loadingImage from "./public/loading.svg";

const loading = () => {
  return <Image alt="loading" src={loadingImage} />;
};

export default loading;
