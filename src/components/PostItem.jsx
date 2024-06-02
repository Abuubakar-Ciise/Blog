import React from "react";
import './PostItem.css'
import { Link } from "react-router-dom";

const stripHtmlTags = (htmlString) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlString;
    return tempElement.textContent || tempElement.innerText || "";
  };

const PostItem = ({ post }) => {
    return (
        <div>
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full" src={post.x_featured_media_medium} alt="" />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
            <p className="mt-6 text-xl font-semibold">
                <Link to={post.slug} title="" className="text-black1"> {post.title.rendered}</Link>
            </p>
            <p className="mt-4 text-gray-600">{stripHtmlTags(post.excerpt.rendered)}</p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
        </div>
    );
};

export default PostItem;
