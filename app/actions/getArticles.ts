import prisma from "@/app/libs/prismadb";

export interface IArticleParams {
    category?: string;
}

export default async function getArticles(
  params: IArticleParams
) {
  try {
    const {
        
        category
    } = params;

    let query: any = {};
    
    if (category) {
      query.category = category;
    }


   




    const articles = await prisma.article.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });


    const safeArticles = articles.map((article) => ({
        ...article,
        createdAt: article.createdAt.toISOString(),
      }));
  
      return safeArticles;

  } catch (error: any) {
    throw new Error(error);
  }

}