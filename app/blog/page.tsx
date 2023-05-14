import React from 'react';
import BlogCardList from '../components/blog/BlogCardList';
import MainBlogCard from '../components/blog/MainBlogCard';
import getArticles, {IArticleParams} from '../actions/getArticles';


interface HomeProps {
    searchParams: IArticleParams
  };
  
  const page = async ({ searchParams }: HomeProps) => {
    const articles = await getArticles(searchParams);

    return (
        <div>
<div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
  <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl">
         {articles.slice(0,1).map((article: any) => (
                  <MainBlogCard
                      key={article.id}
                      data={article}
                  />
                ))}

    <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">

    {articles.slice(1).map((article: any) => (
                  <BlogCardList

                      key={article.id}
                      data={article}
                  />
                ))}

     
    </div>
  </div>
</div>
        </div>
    );
};

export default page;