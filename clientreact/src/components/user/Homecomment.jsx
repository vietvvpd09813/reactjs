import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { Rate } from "antd";
import { useGetCommentsQuery, useNewCommentMutation } from "../../redux/createAPI";
import { useSelector } from "react-redux";

export default function Comments({ productId }) {
  const { data, refetch } = useGetCommentsQuery(productId, {
    refetchOnMountOrArgChange: true,
  });
  const [newComment] = useNewCommentMutation();
  const comments = data?.data || [];

  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setErrorMessage("Vui lòng nhập nội dung bình luận.");
      return;
    }

    if (rating === 0) {
      setErrorMessage("Vui lòng chọn mức đánh giá.");
      return;
    }

    try {
      setErrorMessage(""); 
      const text = comment;
      const body = { productId, userId, rating, text };

      await newComment(body);
      refetch();
      setComment("");
      setRating(0);
    } catch (error) {
      console.error("Error while submitting comment:", error);
      setErrorMessage("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  const listComments = comments?.map(comment => (
    <CommentItem 
      key={comment.id}
      comment={comment}
      refetch={refetch}
    />
  ));

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-2xl mb-4">Đánh giá sản phẩm</h3>

      <div className="flex flex-col space-y-4">
        {listComments}
      </div>

      <form onSubmit={handleAddComment} className="mt-6">
        <div className="mb-4">
          <span className="font-medium">Đánh giá của bạn: </span>
          <Rate 
            value={rating} 
            onChange={(value) => setRating(value)} 
          />
        </div>
        
        <div className="w-full mb-4">
          <textarea
            className="bg-gray-100 rounded border border-gray-300 w-full h-24 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            name="body"
            placeholder="Viết bình luận của bạn..."
            value={comment} 
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
        )}

        <div className="w-full flex justify-end px-3 mt-4">
          <button
            type="submit"
            className="px-8 py-2 rounded-md text-white text-sm bg-indigo-500 hover:bg-indigo-600 transition-all"
          >
            Đăng Bình luận
          </button>
        </div>
      </form>
    </div>
  );
}
