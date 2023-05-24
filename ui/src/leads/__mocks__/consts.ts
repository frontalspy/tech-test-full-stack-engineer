import { AcceptedLeadItf, InvitedLeadItf } from "../interface";

export const mockInvitedLead: InvitedLeadItf = {
  dateCreated: "2022-01-01",
  suburbId: 1,
  categoryId: 1,
  id: 1,
  description: "I want a job at HiPages",
  price: "100",
  contactName: "Hi Pages",
};

export const mockAcceptedLead: AcceptedLeadItf = {
  dateCreated: "2023-01-01",
  suburbId: 2,
  categoryId: 2,
  id: 25,
  description: "It is me, the master chef",
  price: "2500.25",
  contactName: "Gordon Ramsay",
  contactPhone: "123-456-7890",
  contactEmail: "gordon@ramsay.co.uk",
};
