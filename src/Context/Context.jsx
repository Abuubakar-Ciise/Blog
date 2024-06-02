import React, { createContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../pages/Loading";
import Error from "../pages/Error";
export const BlogContext = createContext();


const BlogContextProvider = ({children})=>{
    // const [randomNumber, setRandomNumber] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Track errors

    async function getPosts() {
        // const newRandomNumber = Math.floor(Math.random() * 10) + 1; 
        // setRandomNumber(newRandomNumber);
        try {
            setLoading(true);
            setError(null); 
            const res = await fetch(`https://admin.just.edu.so/wp-json/wp/v2/posts`);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setPosts(data);
            console.log(data);
        } catch (error) {
            setError(error.message); 
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) {
        return (
            <BlogContext.Provider value={{ loading }}>
                <Header />
                <Loading />
                
            </BlogContext.Provider>
        );
    }

    if (error) {
        return (
            <BlogContext.Provider value={{ error }}>
                <Header />
                <Error message={error} />
              
            </BlogContext.Provider>
        );
    }

    return (
        <BlogContext.Provider value={posts}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContextProvider