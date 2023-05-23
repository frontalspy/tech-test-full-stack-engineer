export type LeadType = "invited" | "accepted";

type CommonLeadItf = {
  dateCreated: string;
  suburb: string;
  category: string;
  Id: number;
  description: string;
  price: string;
};

export interface InvitedLeadItf extends CommonLeadItf {
  name: string;
}

export interface AcceptedLeadItf extends CommonLeadItf {
  name: string;
  phone: string;
  email: string;
}
