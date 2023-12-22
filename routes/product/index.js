const ProductController = require("../../controllers/productController");
const authentication = require("../../middlewares/authentication");
const { isSeller } = require("../../middlewares/checkRoleUser");
const router = require("express").Router();

router.get("/", ProductController.getProduct);

//User dengan token yang valid dan role SELLER yang dapat mengakses API
router.post("/", authentication, isSeller, ProductController.addProduct);
router.get("/:id", authentication, isSeller, ProductController.getProductByID);
router.put("/:id", authentication, isSeller, ProductController.updateProductByID);
router.delete("/:id", authentication, isSeller, ProductController.deleteProduct);

module.exports = router;