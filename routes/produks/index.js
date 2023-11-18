const produkController = require("../../controllers/produk-controller");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const routes = require("express").Router();

routes.post("", authentication, isAdmin, produkController.addProduk);
routes.get("", produkController.getProduk);
routes.get("/:id", produkController.getProdukKategori);
routes.put("/:id", authentication, isAdmin, produkController.updateProduk);
routes.delete("/:id", authentication, isAdmin, produkController.deleteProduk);

module.exports = routes;
