var express = require("express");
var router = express.Router();
const {
  getMembers,
  addMember,
  deleteMember,
  addMemberTeam,
  deleteMemberNewTeam,
  getMembersLast,
  deleteOneMember,
} = require("../controller/memberController");

/* GET home page. */
router.get("/", getMembers);

router.post("/", addMember);

router.delete("/", deleteMember);

router.get("/new-team", getMembersLast);

router.post("/new-team", addMemberTeam);

router.delete("/new-team", deleteMemberNewTeam);

router.delete("/members/:id", deleteOneMember)

module.exports = router;
