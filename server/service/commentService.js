const { where } = require("sequelize");
const { Review, User } = require("../models");

const createReview = async ({ productId, userId, rating, text }) => {
  try {
    const review = await Review.create({ productId, userId, rating, text });
    return review;
  } catch (error) {
    console.error("Error creating cart:", error);
    throw error;
  }
};
const getAllReviews = async (productId) => {
  try {
    const reviews = await Review.findAll({
      where: { productId },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["username", "email","image"],
        },
      ],
    });

    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

const updateReview = async ({ id, text, rating }) => {
  try {
    const update = await Review.update({ text, rating }, { where: { id } });
    return update;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
const getAllComment = async () => {
  try {
    const comments = await Review.findAll();
    return comments;
  } catch (error) {
    console.log("không có comment", error);
    throw error;
  }
};
const deleteComment = async (id) => {
  try {
    // Dùng đúng tên model 'Review' để xóa bình luận
    await Review.destroy({ where: { id } });
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw error; // Sửa lại lỗi này, vì 'err' chưa được khai báo
  }
};


module.exports = {
  createReview,
  getAllReviews,
  updateReview,
  getAllComment,
  deleteComment,
};
