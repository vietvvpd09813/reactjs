const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");

// Thiết lập kết nối cơ sở dữ liệu
const sequelize = new Sequelize("reactjs", "root", "Clmmtt123", {
  host: "localhost",
  dialect: "mysql",
});

// Kiểm tra kết nối
sequelize.authenticate()
  .then(() => console.log("Kết nối thành công!"))
  .catch((err) => console.error("Kết nối thất bại:", err));

// Đọc và import tất cả các model
const models = fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .reduce((acc, file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    acc[model.name] = model;
    return acc;
  }, {});

// Thiết lập các mối quan hệ giữa các model
Object.values(models).forEach((model) => model.associate?.(models));

// Xuất kết nối sequelize và các model
module.exports = { sequelize, Sequelize, ...models };
