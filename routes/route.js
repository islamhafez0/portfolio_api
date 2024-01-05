const router = require("express").Router();
const projectsData = require("../data/projects.js");
const blogPosts = require("../data/blog.js");
const { signup, getBill, contact } = require("../controllers/appController.js");

// Define routes using the router
router.post("/user/signup", signup);
router.post("/product/getbill", getBill);
router.get("/projects", (req, res) => {
  // Check if a slug query parameter is provided
  const slugParam = req.query.slug;
  if (slugParam) {
    const project = projectsData.find((p) => p.slug === slugParam);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: "Project not found" });
    }
  } else {
    // If no slug is provided, return all projects
    res.json(projectsData);
  }
});
router.post("/contact", contact);

router.get("/blog", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedPosts = blogPosts.slice(startIndex, endIndex);

  res.json(paginatedPosts);
});
module.exports = router;
