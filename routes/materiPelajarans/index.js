const router= require("express").Router();
const materiController= require("../../controllers/materiController");
const authentication= require("../../middlewares/jwtMiddle");
const authorization= require("../../middlewares/isAdmin");

router.post("", authentication, authorization, materiController.addMateri);
router.get("", materiController.getMateri);
router.get("/:id", materiController.getId_Materi);
router.put("/:id", authentication, authorization,materiController.updateMateri);
router.delete("/:id",authentication, authorization, materiController.deleteMateri);
module.exports=router;