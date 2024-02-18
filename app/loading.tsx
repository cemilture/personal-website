import Image from "next/image";
import loadingImage from "./public/loading.svg";

const loading = () => {
  return (
    <Image
      width={350}
      height={350}
      alt="Cemil TÜRE loading"
      src={loadingImage}
    />
  );
};

export default loading;
