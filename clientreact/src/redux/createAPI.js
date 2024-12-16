import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const adminUrl = "/admin/";
const authUrl = "/auth/";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/v1/api/",
    prepareHeaders: async (headers) => {
      let token = localStorage.getItem("accessToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `${adminUrl}users`,
    }),
    updateStatusUser: builder.mutation({
      query: ({ id, isActive }) => ({
        url: `${adminUrl}users/${id}`,
        method: "PATCH",
        body: { isActive },
      }),
    }),
    getCategoriesAdmin: builder.query({
      query: () => `${adminUrl}categories`,
    }),
    newCategory: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}categories`,
        method: "POST",
        body,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ id, body }) => ({
        url: `${adminUrl}categories/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `${adminUrl}products/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}categories/${id}`,
        method: "DELETE",
      }),
    }),
    getProductsAdmin: builder.query({
      query: () => `${adminUrl}products`,
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}products`,
        method: "POST",
        body,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}products/${id}`,
        method: "DELETE",
      }),
    }),
    getProductDetail: builder.query({
      query: (id) => `${adminUrl}products/${id}`,
    }),
    getAllCarts: builder.query({
      query: (userId) => `admin/cart/${userId}`,
      providesTags: (result, error, userId) => [{ type: "Cart", id: userId }],
    }),
    getCart: builder.query({
      query: ({ userId, productId }) => `cart/${userId}?productId=${productId}`,
    }),
    createCart: builder.mutation({
      query: (body) => ({
        url: "admin/cart",
        method: "POST",
        body,
      }),
    }),
    updateCart: builder.mutation({
      query: ({ id, body }) => ({
        url: `admin/cart/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "cart", id }],
    }),
    deleteCart: builder.mutation({
      query: (cartId) => ({
        url: `admin/cart/${cartId}`,
        method: "DELETE",
      }),
    }),
    getTodo: builder.query({
      query: () => "admin/users",
    }),
    login: builder.mutation({
      query: (body) => ({
        url: `${authUrl}login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: `${authUrl}register`,
        method: "POST",
        body,
      }),
    }),
    newOrder: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}order`,
        method: "POST",
        body,
      }),
    }),
    newOrderItem: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}orderItem`,
        method: "POST",
        body,
      }),
    }),
    getOrders: builder.query({
      query: (userId) => `admin/order/${userId}`,
    }),

    newComment: builder.mutation({
      query: (body) => ({
        url: `admin/review`,
        method: "POST",
        body,
      }),
    }),
    getComments: builder.query({
      query: (productId) => `admin/review/${productId}`,
    }),

    getComments2: builder.query({
      query: () => `admin/review`,
    }),
    getOrder2: builder.query({
      query: () => `admin/order`,
    }),
    deleteCommet: builder.mutation({
      query: (id) => ({
        url: `admin/review/${id}`,
        method: "DELETE",
      }),
    }),
    updateOrderStatus: builder.mutation({
      query: ({ orderId, status }) => ({
        url: `admin/order/${orderId}`,
        method: "PATCH",
        body: { status }, 
      }),
    }),
    deleteAllCarts: builder.mutation({
      query: (userId) => ({
        url: `admin/cart/deleteAll/${userId}`, 
        method: "DELETE",
      }),
    }),

    updateComment: builder.mutation({
      query: ({ id, text, rating }) => ({
        url: `admin/review/${id}`,
        method: "PATCH",
        body: { text, rating },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateStatusUserMutation,
  useGetCategoriesAdminQuery,
  useNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetProductsAdminQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductDetailQuery,
  useGetAllCartsQuery,
  useGetCartQuery,
  useCreateCartMutation,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useNewOrderMutation,
  useNewOrderItemMutation,
  useGetTodoQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetOrdersQuery,
  useNewCommentMutation,
  useGetCommentsQuery,
  useUpdateCommentMutation,
  useGetComments2Query,
  useGetOrder2Query,
  useDeleteCommetMutation,
  useUpdateOrderStatusMutation,
  useDeleteAllCartsMutation,
} = todoApi;
