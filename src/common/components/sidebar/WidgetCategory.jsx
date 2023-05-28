import Link from "next/link";
import Image from "next/image";
import { removeDuplicates, slugify } from "../../utils";

const WidgetCategory = ({ catData }) => {

  const uniqueCategory = removeDuplicates(catData, "cate");

  return (
    <div className="axil-single-widget widget widget_categories mb--30">
      <ul>
        {uniqueCategory.slice(0, 4).map((data) => (
          <li className="cat-item" key={data.slug}>
            <Link href={`/category/${slugify(data.cate)}`}>
              <a className="inner">
                <div className="thumbnail">
                  <Image
                    src="https://images.pexels.com/photos/2498764/pexels-photo-2498764.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt={data.cate}
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">{data.cate}</h5>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetCategory;
