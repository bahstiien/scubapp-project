'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';

import { 
  SafeArticle, 
  SafeUser 
} from "@/app/types";

interface BlogCardProps {
  data: SafeArticle;
};

const MainBlogCard: React.FC<BlogCardProps> = ({
  data,
}) => {
  const router = useRouter();

    return (
        <div>
             <div className="flex flex-col items-center sm:px-5 md:flex-row">
      <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
        <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5">
          <div className="bg-blue-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
              uppercase inline-block">
           
            <p className="inline text-xs font-medium">{data.category}</p>
          </div>
          <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">{data.title}</a>
          <div className="pt-2 pr-0 pb-0 pl-0">
            <p className="text-sm font-medium inline">author:</p>
            <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Jack Sparrow</a>
            <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">·{data.createdAt}</p>
            <p className="text-gray-200 text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
          </div>


 
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="block">
          <img
              src={data.imageSrc} className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MainBlogCard;