import Image from 'next/image';
import InstaData from '../../../data/instagram/instagram.json';

const WidgetInstagramPost = () => {
    return ( 
        <div className="axil-single-widget widget widget_instagram mb--30">
        <h5 className="widget-title">Instagram</h5>
        <ul className="instagram-post-list-wrapper">
			{InstaData.map((data) => (
				<li className="instagram-post-list" key={data.id}>
				 <a href={data.url}>
					<Image
						src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=400"
						height={105}
						width={105}
						alt="Instagram Images"
					/>
				 </a>
			   </li>
			))}
         
        </ul>
      </div>
     );
}
 
export default WidgetInstagramPost;