import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";

import getArticles, { 
} from "@/app/actions/getArticles";


import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import Divider from "./components/ui/Divider";
import Features from "./components/ui/Features";
import BlogCard from "./components/blog/BlogCard";

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const articles = await getArticles(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div 
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          
        </div>
            <Divider />
            <Divider />
            <Features />
            <Divider />
            
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
            <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
              <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                {articles.slice(0,3).map((article: any) => (
                  <BlogCard
                      currentUser={currentUser}
                      key={article.id}
                      data={article}
                  />
                ))}
              </section>
            </section>
        <Divider />
      </Container>
    </ClientOnly>
  )
}

export default Home;