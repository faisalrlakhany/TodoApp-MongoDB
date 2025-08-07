import express from "express";
import sendResponse from "../helper/sendResponse.js";
import Todo from "../models/Todo.js";
import User from "../models/User.js";

const router = express.Router();

// create a new todo
router.post("/addTodo", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existUser = await User.findById(id);
    if (!existUser) {
      return sendResponse(res, 404, null, "Login First");
    }
    const newTodo = new Todo({ title, body, user: existUser });
    await newTodo.save();
    existUser.list.push(newTodo);
    await existUser.save();

    sendResponse(res, 200, newTodo, "Todo added successfully");
  } catch (error) {
    console.log("Error ===> ", error);
    sendResponse(res, 200, null, "Error adding todo: ");
  }
});

// update a todo
router.put("/updateTodo/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return sendResponse(res, 404, null, "Login First");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );
    updatedTodo.save();
    sendResponse(res, 200, updatedTodo, "Todo updated successfully");
  } catch (error) {
    console.log("Error ===> ", error);
    sendResponse(res, 400, null, "Error updatind todo: ");
  }
});

// delete a todo
router.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const { id } = req.body;
    const existUser = await User.findByIdAndUpdate(id, {
      $pull: { list: req.params.id },
    });
    if (!existUser) {
      return sendResponse(res, 404, null, "Login First");
    }

    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return sendResponse(res, 404, null, "Todo not found");
    }
    sendResponse(res, 200, null, "Todo deleted successfully");
  } catch (error) {
    console.log("Error ===> ", error);
    sendResponse(res, 400, null, "Error deleting todo: ");
  }
});

// get todo
router.get("/getTodo/:id", async (req, res) => {
  try {
    const allTodo = await Todo.find({ user: req.params.id }).sort({
      createdAt: -1,
    });

    if (allTodo.length === 0) {
      sendResponse(res, 200, null, "No Todos Found");
    }

    sendResponse(res, 200, allTodo, "Todo Fetched Successfully");
  } catch (error) {
    console.log("Error ===> ", error);

    sendResponse(res, 400, null, "Error retrieving todos: ");
  }
});

export default router;
