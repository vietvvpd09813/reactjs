// const {
//   createOrder,
//   getAllOrders,
//   getOrder,
//   updateOrderStatus,
//   cancelOrder,
// } = require("../service/orderService");

// const { resErrors, resData } = require("./common/common");


// class ApiOrderController {
//   // API lấy tất cả đơn hàng của người dùng
//   static async index(req, res) {
//     try {
//       const userId = req.params.id;
//       const orders = await getAllOrders(userId); // Lấy tất cả đơn hàng của người dùng từ service
//       const message = "Get orders successfully";
//       resData(res, 200, message, orders); // Gửi phản hồi với dữ liệu đơn hàng
//     } catch (error) {
//       resErrors(res, 500, error.message); // Xử lý lỗi nếu có
//     }
//   }

//   // API tạo đơn hàng mới
//   static async create(req, res) {
//     try {
//       const userId = req.params.id; // Lấy ID người dùng từ params
//       const order = await createOrder(userId); // Tạo đơn hàng mới từ service
//       const message = "Order created successfully";
//       resData(res, 201, message, order); // Gửi phản hồi với đơn hàng mới
//     } catch (error) {
//       resErrors(res, 500, error.message); // Xử lý lỗi nếu có
//     }
//   }

//   // API lấy chi tiết đơn hàng theo ID
//   static async show(req, res) {
//     try {
//       const { orderId, userId } = req.params; // Lấy ID đơn hàng và người dùng từ params
//       const order = await getOrder(orderId, userId); // Lấy thông tin đơn hàng từ service
//       const message = "Get order successfully";
//       resData(res, 200, message, order); // Gửi phản hồi với thông tin đơn hàng
//     } catch (error) {
//       resErrors(res, 500, error.message); // Xử lý lỗi nếu có
//     }
//   }

//   // API cập nhật trạng thái đơn hàng
//   static async updateStatus(req, res) {
//     try {
//       const { orderId, userId, status } = req.body; // Lấy ID đơn hàng, người dùng và trạng thái từ body
//       const updatedOrder = await updateOrderStatus(orderId, userId, status); // Cập nhật trạng thái đơn hàng từ service
//       const message = "Order status updated successfully";
//       resData(res, 200, message, updatedOrder); // Gửi phản hồi với kết quả cập nhật
//     } catch (error) {
//       resErrors(res, 500, error.message); // Xử lý lỗi nếu có
//     }
//   }

//   // API hủy đơn hàng
//   static async cancel(req, res) {
//     try {
//       const { orderId, userId } = req.params; // Lấy ID đơn hàng và người dùng từ params
//       const cancelledOrder = await cancelOrder(orderId, userId); // Hủy đơn hàng từ service
//       const message = "Order cancelled successfully";
//       resData(res, 200, message, cancelledOrder); // Gửi phản hồi với kết quả hủy đơn hàng
//     } catch (error) {
//       resErrors(res, 500, error.message); // Xử lý lỗi nếu có
//     }
//   }
// }

// module.exports = ApiOrderController;
