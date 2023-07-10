import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {};

function loading({}: Props) {
  return (
    <div className="p-5 md:p-12">
      <Skeleton />
      <Skeleton width={200} />

      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row pl-0 md:p-10 m-5 ml-0">
        <Skeleton width={400} height={350} />

        <div className="pl-0 md:pl-5 mt-10 md:mt-0">
          <Skeleton width={300} />
          <Skeleton width={250} />
          <Skeleton width={200} />
          <br />
          <Skeleton width={600} height={100} />
          <br />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export default loading;
