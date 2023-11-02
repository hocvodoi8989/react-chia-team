const { db } = require("../config/db");

const getMembers = (req, res) => {
  const q = "Select * from member";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const addMember = (req, res) => {
  const values = [req.body.member];
  const q = "INSERT INTO member (name) VALUES (?)";
  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.status(201).json({ message: "Success created member", data });
  });
};

const deleteMember = (req, res) => {
  const q = "delete from football.member";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const addMemberTeam = (req, res) => {
  const team1 = req.body.handleTeam1;
  const team2 = req.body.handleTeam2;

  const saveTeam1 = JSON.stringify(team1);
  const saveTeam2 = JSON.stringify(team2);

  const values = [saveTeam1, saveTeam2];
  const q = "insert into soccer_real(team_1, team_2) values(?)";
  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    return res.status(201).json({ message: "Success created member", data });
  });
};

const deleteMemberNewTeam = (req, res) => {
  const q = "DELETE from soccer_real";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const getMembersLast = (req, res) => {
  const q = "SELECT * FROM football.soccer_real order by id desc limit 1";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    if (data == null || data.length == 0) {
      return;
    }
    let result = data[0];
    return res.status(200).json({
      team_1: JSON.parse(result.team_1),
      team_2: JSON.parse(result.team_2),
    });
  });
};

const deleteOneMember = (req, res) => {
  const q = "delete from football.member where id=?";
  const itemId = req.params.id
  db.query(q, [itemId], (err, data) => {
    if (err) {
      console.log('Lỗi xóa mục trong cơ sở dữ liệu', err)
      res.status(500).send('Lỗi xóa mục')
    } else {
      res.sendStatus(200);
    }
  })
}


module.exports = {
  getMembers,
  addMember,
  deleteMember,
  addMemberTeam,
  deleteMemberNewTeam,
  getMembersLast,
  deleteOneMember,
};
