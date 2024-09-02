module.exports = app => {
  const tutes = require("../controllers/tute.controller.js");
  var router = require("express").Router();

  router.post("/", tutes.create);
  router.get("/", tutes.findAll);
  router.get("/published", tutes.findAllPublished);
  router.get("/:id", tutes.findOne);
  router.put("/:id", tutes.update);
  router.delete("/:id", tutes.delete);
  router.delete("/", tutes.deleteAll);

  app.use('/api/tutes', router);
}