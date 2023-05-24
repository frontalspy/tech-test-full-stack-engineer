import { useEffect, useState } from "react";
import { getAcceptedLeads, getInvitedLeads, putUpdateLead } from "./apis";
import { AcceptedLeadItf, InvitedLeadItf } from "./interface";
import { mockAcceptedLead, mockInvitedLead } from "./__mocks__/consts";

type LeadDataItf = {
  accepted: AcceptedLeadItf[] | undefined;
  invited: InvitedLeadItf[] | undefined;
};

export const useGetLeads = (loading: boolean): LeadDataItf => {
  const [leads, setLeads] = useState<LeadDataItf>({
    accepted: undefined,
    invited: undefined,
  });

  useEffect(() => {
    Promise.all([getAcceptedLeads(), getInvitedLeads()])
      .then(([accepted, invited]) => {
        setLeads({ accepted, invited });
      })
      .catch((err) => console.error(err));
  }, [loading]);

  return leads;
};
