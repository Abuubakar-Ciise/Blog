import React from "react";
import LoadingItem from "../components/LoadingItem";


const Loading = () => {
    // const numLoadingItems = Math.floor(Math.random() * 5) + 1;

    // const loadingItems = [];

    // for (let i = 0; i < numLoadingItems; i++) {
    //     loadingItems.push(<LoadingItem key={i} />);
    // }
    return(
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                    <LoadingItem/>
                    <LoadingItem/>
                    <LoadingItem/>
                    <LoadingItem/>
                    <LoadingItem/>
                    <LoadingItem/>
                </div>
            </div>
        </section>
    )
}
export default Loading