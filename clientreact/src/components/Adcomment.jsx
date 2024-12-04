

export default function Adcomment() {


  const comments = [
    { id: 1, name: 'Nguyễn Văn A', email: 'a.nguyen@example.com', content: 'Bài viết rất hay!', date: '2024-11-01', status: 'Đã duyệt' },
    { id: 2, name: 'Trần Thị B', email: 'b.tran@example.com', content: 'Cảm ơn vì bài viết này!', date: '2024-11-02', status: 'Đang chờ duyệt' },
    // Thêm các bình luận mẫu khác nếu cần
  ];



  return (
    <>
    

      

     
     

     

      {/* Comment Table */}
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nội dung</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td className="px-6 py-4 whitespace-nowrap">{comment.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{comment.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{comment.content}</td>
              <td className="px-6 py-4 whitespace-nowrap">{comment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{comment.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
              
                <button className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out">
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