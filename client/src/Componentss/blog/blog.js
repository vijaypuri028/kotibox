import React from 'react';
import './blog.css';

function Blog() {
  return (
    <div className='mt-2 pt-5'>
      <div className="container md:container-xl mx-auto p-3.5">
        <div className="mb-7 flex justify-center items-center text-center">
          <h2 className="text-5xl text-light leading-normal font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
          Our Latest Tech Blogs
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-8 ">
          {[
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjAgsBrbMnLukNIR7uaWqkT0NR1IXT7tnPg&usqp=CAU",
              date: "Oct, 2021",
              title: "Lorem Ipsum is Simply Dummy Text of the",
              content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhkk3bTsCGUexAWuCrRaJedXosbyO2jCtevA&usqp=CAU",
              date: "Oct, 2021",
              title: "Lorem Ipsum is Simply Dummy Text of the Printing and Typesetting",
              content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkM8HCyHG2wu59O2mDnA_ry3GD62J0RrFMA&usqp=CAU",
              date: "Oct, 2021",
              title: "Lorem Ipsum is Simply Dummy Text of the Printing and Typesetting",
              content: "Lorem Ipsum has been the industry's standard.",
            },
          ].map((post, index) => (
            <div key={index} className="card border-2 border-transparent hover:border-yellow-600 rounded-lg hover:shadow-xl transition duration-300 ease-in-out bg-dark">
              <img src={post.img} alt="" className="w-full rounded-t-md" />
              <div className="p-3">
                <div className="text-slate-600 text-sm font-normal pt-2">{post.date}</div>
                <h2 className="text-sky-800 text-lg font-semibold line-clamp-2 pt-2.5 h-[66px]">{post.title}</h2>
                <p className="text-slate-700 font-normal line-clamp-2 text-light leading-6 pt-1 h-[52px]">{post.content}</p>
                <div className="text-right pt-1">
                  <button className="text-yellow-600 text-sm font-semibold button">Read More <i className="fa fa-arrow-right fa-beat" style={{ color: '#d29d2c' }}></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container pt-9 flex justify-center items-center text-center mt-5">
          <button className="bg-sky-800 hover:bg-yellow-600 text-light rounded-full px-8 py-3 text-xl font-semibold button">Read Blogs</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
