import { AcceptedLeadItf, InvitedLeadItf } from "../interface";

export const mockInvitedLead: InvitedLeadItf = {
  dateCreated: "2022-01-01",
  suburb: "Sydney",
  category: "Plumbing",
  Id: 1,
  description: "I want a job at HiPages",
  price: "100",
  name: "Hi Pages",
};

export const mockAcceptedLead: AcceptedLeadItf = {
  dateCreated: "2023-01-01",
  suburb: "Melbourne",
  category: "Chef",
  Id: 25,
  description: "It is me, the master chef",
  price: "2500.25",
  name: "Gordon Ramsay",
  phone: "123-456-7890",
  email: "gordon@ramsay.co.uk",
};
