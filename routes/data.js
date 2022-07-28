const express = require("express");
const router = express.Router();

router.post("/",require("./../controllers/data").createItem);

router.get("/",require("./../controllers/data").getAllItem);

router.get("/:itemID",require("./../controllers/data").getItem);

router.delete("/:itemID",require("./../controllers/data").deleteItem);

router.put("/:itemID",require("./../controllers/data").updateItem);


module.exports = router;