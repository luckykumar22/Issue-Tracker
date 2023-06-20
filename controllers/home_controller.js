const Project = require("../models/Project");
module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({}).sort("-createdAt");
    return res.render("home", {
      title: "Issue Tracker | Home",
      projects,
    });
  } catch (error) {
    console.log("Error", error);
    return;
  }
};
