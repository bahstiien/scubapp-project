import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";

import getUsers, {IUsersParams} from "../actions/getUsers";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";

import UserList from "../components/UserList";

interface DashBoardHomeProps {
  searchParams: IUsersParams
};

const Home = async ({ searchParams }: DashBoardHomeProps) => {
  const users = await getUsers(searchParams);
  const currentUser = await getCurrentUser();
  console.log(users);

  if (users.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Email</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Team</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {users.map((user: any) => (
          <>
            <UserList name={user.name} email={user.email} role={user.role} />
          </>
          ))}
              </tbody>
  </table>
</div>
      </Container>
    </ClientOnly>
  )
}

export default Home;