export default async function UserDetailPage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = await params;
  return <div>User Id: {userId}</div>;
}
