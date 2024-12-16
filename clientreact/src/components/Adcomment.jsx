import {
  useGetComments2Query,
  useGetUsersQuery,
  useDeleteCommetMutation,
  useGetProductsAdminQuery
} from "../redux/createAPI";

export default function Adcomment() {
  const { data: commentData, refetch } = useGetComments2Query();
  const commentList = commentData?.data || [];

  const { data: userData } = useGetUsersQuery();
  const userList = userData?.data || [];

  const { data: productData } = useGetProductsAdminQuery();
  const productList = productData?.data || [];

  const combinedData = commentList.map((comment) => {
    const user = userList.find((user) => user.id === comment.userId);
    const product = productList.find((product) => product.id === comment.productId);
    
    return {
      ...comment,
      userName: user?.username || "Unknown",
      userEmail: user?.email || "Unknown",
      userPhone: user?.phone || "Unknown",
      productName: product?.name || "Unknown Product",
    };
  });

  const [deleteComment] = useDeleteCommetMutation();

  const handleDeleteComment = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa bình luận này?");
    
    if (confirmDelete) {
      try {
        await deleteComment(id);
        refetch();
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    }
  };

  return (
    <>
      <table className="m-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tên
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nội dung
            </th>
           
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sản phẩm
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {combinedData.map((comment) => (
            <tr key={comment.id}>
              <td className="px-6 py-4 whitespace-nowrap">{comment.userName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{comment.userEmail}</td>
              <td className="px-6 py-4 whitespace-nowrap max-h-40 overflow-y-auto">{comment.text}</td>
            
              <td className="px-6 py-4 whitespace-nowrap">{comment.productName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
