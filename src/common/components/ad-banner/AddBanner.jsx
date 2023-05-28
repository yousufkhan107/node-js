import Image from "next/image";
import Link from "next/link";

const AddBanner = ({img, height, width, pClass}) => {
  return (
    <div className={`axil-banner ${pClass ? pClass : ""}`}>
      <div className="thumbnail">
        <Link href="#">
          <a>
            <Image
              src="https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt='Add Banner'
              height={height ? height : 200}
              width={width ? width : 1230}
              placeholder="blur"
              blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII=`}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AddBanner;
