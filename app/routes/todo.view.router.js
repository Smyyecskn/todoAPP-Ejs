"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// ROUTERS:

const todo = require("../controllers/todo.view.controller");

const router = require("express").Router();

// router.route("/").get(todo.list).post(todo.create);

// router
//   .route("/:id")
//   .get(todo.read)
//   .put(todo.update)
//   .patch(todo.update)
//   .delete(todo.delete);

router.get("/", todo.list);
// router.get("/create", todo.create); //form görüntüleme
// router.post("/create", todo.create); //form gönderme

router.all("/create", todo.create); //2si bir arada view +send

module.exports = router;
