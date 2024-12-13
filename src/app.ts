import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin";
import shopRouter from "./routes/shop";
import path from "path";
import rootDir from "./util/path";
import { notFoundPage } from "./controllers/notFound";
import sequelize from "./util/database";
import Product from "./models/product";
import User from "./models/user";
import { UserInstance } from "./dto/user.dto";
import Cart from "./models/cart";
import CartItem from "./models/cartItem";

declare global {
  namespace Express {
    interface Request {
      user: UserInstance;
    }
  }
}

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));
app.use((req, res, next) => {
  User.findAll()
    .then((users) => {
      req.user = users?.[0];
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRouter);

app.use(shopRouter);

app.use(notFoundPage);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    return User.findAll().then((users) => {
      return users?.[0];
    });
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Masoud", email: "test@test.com" });
    }
    return user;
  })
  .then((user) => {
    console.log(user);
    app.listen(3000);
  })
  .catch((err) => {
    console.log("error: ", err);
  });
