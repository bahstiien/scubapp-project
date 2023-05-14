import prisma from "@/app/libs/prismadb";

export interface IUsersParams {
name?: string;
email?: string;
role?: string;

}

export default async function getUsers(
  params: IUsersParams
) {
  try {
    const {
   name, email, role
    } = params;

    let query: any = {};

    const users = await prisma.user.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeUsers = users.map((user) => ({
      ...user,
      createdAt: user.createdAt.toISOString(),
    }));

    return safeUsers;
  } catch (error: any) {
    throw new Error(error);
  }
}