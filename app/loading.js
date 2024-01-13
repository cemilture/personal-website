import Image from "next/image";
import loadingswg from "./public/loading.svg";

const loading = () => {
  return <Image alt="loading" src={loadingswg} />;
};

export default loading;
