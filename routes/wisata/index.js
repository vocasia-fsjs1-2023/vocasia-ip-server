const wisataController = require("../../controllers/wisataController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const router = require("express").Router();

router.post("/", authentication, isAdmin, wisataController.postWisata);
router.get("/", wisataController.getAllWisata);
router.get("/:id", wisataController.getWisataId);
router.put("/:id", authentication, isAdmin, wisataController.putWisataId);
router.delete("/:id", authentication, isAdmin, wisataController.deleteWisataId);

module.exports = router;