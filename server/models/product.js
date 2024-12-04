module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER, // Chuyển sang INTEGER để lưu giá trị số nguyên
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.ENUM("sneakers", "casual", "sports", "formal"), // Các loại giày
        defaultValue: "sneakers",
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "categories", // Bảng liên kết
          key: "id",
        },
      },
      image1: {
        type: DataTypes.STRING,
        allowNull: false, // Hình ảnh 1 là bắt buộc
      },
      image2: {
        type: DataTypes.STRING,
        allowNull: true, // Hình ảnh 2 có thể để trống
      },
      image3: {
        type: DataTypes.STRING,
        allowNull: true, // Hình ảnh 3 có thể để trống
      },
      color1: {
        type: DataTypes.STRING,  // Thêm màu 1
        allowNull: true, // Có thể để trống
      },
      color2: {
        type: DataTypes.STRING,  // Thêm màu 2
        allowNull: true, // Có thể để trống
      },
      color3: {
        type: DataTypes.STRING,  // Thêm màu 3
        allowNull: true, // Có thể để trống
      },
    },
    {
      timestamps: true,
      paranoid: true, // Soft delete
    }
  );

  // Định nghĩa quan hệ trong hàm associate
  Product.associate = (models) => {
    // Mối quan hệ với Category
    Product.belongsTo(models.Category, {
      foreignKey: "categoryId",
      as: "category",
    });

    // Mối quan hệ với Cart
    Product.hasMany(models.Cart, {
      foreignKey: "productId",
      as: "carts",
    });

    // Mối quan hệ với OrderItem
    Product.hasMany(models.OrderItem, {
      foreignKey: "productId",
      as: "orderItems",
    });

    // Mối quan hệ với Review
    Product.hasMany(models.Review, {
      foreignKey: "productId",
      as: "reviews",
    });
  };

  return Product;
};
