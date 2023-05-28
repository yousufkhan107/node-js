import Image from "next/image";

const WidgetAd = ({url, image, height, width}) => {
  return (
    <div className="axil-single-widget widget widget_ads mb--30">
      <div className="thumbnail">
        <a href={url}>
            <Image
            src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Ads Image"
            height={height}
            width={width}
            priority={true}
            />
        </a>
      </div>
    </div>
  );
};

export default WidgetAd;
