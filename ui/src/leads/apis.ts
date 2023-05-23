import { AcceptedLeadItf, InvitedLeadItf } from "./interface";

const baseUrl = "/:8080/";

export const getAcceptedLeads = (): Promise<AcceptedLeadItf[]> =>
  fetch(`${baseUrl}/getLeads?type=accepted`)
    .then((res) => res.json())
    .catch((err) => console.error(err));

export const getInvitedLeads = (): Promise<InvitedLeadItf[]> =>
  fetch(`${baseUrl}/getLeads?type=invited`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
