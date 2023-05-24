import * as express from "express";
import * as cors from "cors";
import connection from "./db";
import { selectAcceptedLeads, selectInvitedLeads, updateLead } from "./lead";

const server = express();
const port = 8080;
server.use(cors());
server.use(express.json());

server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

server.get("/leads/", (req, res) => {
  if (req.query.type === "accepted") {
    selectAcceptedLeads((results) => res.send(results));
  } else {
    selectInvitedLeads((results) => res.send(results));
  }
});

server.put("/lead/:leadId", (req, res) => {
  const leadId = req.params.leadId;
  const { action } = req.body;
  updateLead(leadId, action, (results) => res.send(results));
});
