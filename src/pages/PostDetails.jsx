import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PostDetails.css'
import Error from "./Error";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { LuNewspaper } from "react-icons/lu";
import { ImParagraphJustify } from "react-icons/im";




export const BlogContext = createContext();

const stripHtmlTags = (htmlString) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlString;
    return tempElement.textContent || tempElement.innerText || "";
  };

const PostDetails = ()=>{
    
    const {slug} = useParams()

    const[post , setPosts] = useState([])
    const[loading,setLoading] = useState(false)
    const[error,setError] = useState(null)
    console.log("post",JSON.stringify(post))

    async function getPosts() {
        try {
            setLoading(true);
            setError(null); 
            const res = await fetch(`https://admin.just.edu.so/wp-json/wp/v2/posts?slug=${slug}`)
            if(!res.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await res.json();
            if (data.length > 0) {
                setPosts(data[0]);
            } else {
                setError("Post not found");
            }
            console.log(data);
            
        } catch (error) {
            setError(error.message)
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=> {
        getPosts();
    },[])
    if (error) {
        return (
            <div>
                <Error message={error} />
            </div>
        );
    }
    

    return (
       <div className="main-container">
        <div className="container">
            <div className="image">
            <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full" src={post.x_featured_media_large} alt="" />
            </a>
            </div>
            <div className="title">
            <h1>{stripHtmlTags(post.title?.rendered)}</h1>
            </div>
            <div className="main-Profile">
                <div className="profile-details">
                <IoPersonCircleOutline size={30} color="green"/> 
                <h2>Abuubakar Ciise</h2>
                </div>
                <div className="profile-date">
                <CgCalendarDates size={25} color="green"/><h2>Oct 18 2002</h2>
                </div>
                <div className="profile-news">
                <LuNewspaper size={20} color="green"/><h2>News</h2>
                </div>
                <div className="profile-paragraph">
                <ImParagraphJustify size={20} color="green"/><h2>(0)</h2>
                </div>
            </div>
            <div className="paragraph">
            {post.content?.rendered.split('<p>').map((paragraph, index) => (
                        <p key={index}>{stripHtmlTags(paragraph)}</p>
                    ))}            
            </div>
        </div>
       </div>
    )
}
export default PostDetails