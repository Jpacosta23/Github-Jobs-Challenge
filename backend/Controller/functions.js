const { Router } = require("express");
const jobs = require("../Job_list/jobs.json");
const router = new Router();

router.get("/", (req, res) => {
  if (jobs) {
    res.json(jobs);
  } else {
    res.status(404);
  }
});

router.get("/keyword/:key", (req, res) => {
  const key = req.params.key;
  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().indexOf(key) != -1 ||
      job.company.toLowerCase().indexOf(key) != -1 ||
      job.stack.indexOf(key) != -1
  );
  if (filtered) {
    res.json(filtered);
  } else {
    res.status(404).end();
  }
});

router.get("/type/:type", (req, res) => {
  const { type } = req.params;
  const filtered = jobs.filter(
    (job) => job.type.toLowerCase().indexOf(type.toLowerCase()) != -1
  );
  if (filtered) {
    res.json(filtered);
  } else {
    res.status(404).end();
  }
});

router.get("/location/:location", (req, res) => {
  const { location } = req.params;
  const filtered = jobs.filter(
    (job) => job.location.toLowerCase().indexOf(location.toLowerCase()) != -1
  );
  if (filtered) {
    res.json(filtered);
  } else {
    res.status(404).end();
  }
});

module.exports = router;
