import connection from "./db";

export const selectInvitedLeads = (cb: (results) => void) => {
  connection.query(
    "SELECT * FROM jobs where status = 'new'",
    (error, results) => {
      if (error) throw error;
      cb(results);
    }
  );
};

export const selectAcceptedLeads = (cb: (results) => void) => {
  connection.query(
    "SELECT * FROM jobs where status = 'accept'",
    (error, results) => {
      if (error) throw error;
      cb(results);
    }
  );
};

export const updateLead = (
  leadId: string,
  leadType: "accept" | "decline",
  cb: (results) => void
) => {
  connection.query(
    `UPDATE jobs SET status = '${leadType}' WHERE status = 'new' AND id = ${leadId}`,
    (error, results) => {
      if (error) throw error;
      cb(results);
    }
  );
};
