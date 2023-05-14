'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';

import { 
  SafeArticle, 
  SafeUser 
} from "@/app/types";

interface BlogCardListProps {
  data: SafeArticle;
};

const BlogCardList: React.FC<BlogCardListProps> = ({
  data,
}) => {
  const router = useRouter();

  const extractContent = data.content.split(' ').slice(0, 30).join(' ');

    return (
<div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src={data.imageSrc} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p className="bg-blue-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">{data.category}</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">{data.title} </a>
        <p className="text-sm text-black">{extractContent} ... </p>
        <div className="pt-2 pr-0 pb-0 pl-0">
          <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">Jack Sparrow</a>
          <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
          <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">1hr 20min. read</p>
        </div>
      </div>
    );
};

export default BlogCardList;