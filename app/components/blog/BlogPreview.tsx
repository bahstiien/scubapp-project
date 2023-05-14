import React from 'react';
import Image
 from 'next/image';
import router from 'next/router';
const BlogPreview = () => {
    return (
        <div>
    <article className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out">
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                 src="/images/preview.jpg"
            alt="Listing"
          />
        
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                    <h3 className="text-center">
                        <a className="text-white text-2xl font-bold text-center" href="#">
                            <span className="absolute inset-0"></span>
                              Vers le blog               
                        </a>
                    </h3>
                </div>
            </article>
        </div>
         
    );
};

export default BlogPreview;