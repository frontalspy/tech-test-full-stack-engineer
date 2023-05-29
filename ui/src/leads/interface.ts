export type LeadType = "invited" | "accepted";
export type LeadAction = "accept" | "decline";

type CommonLeadItf = {
  createdAt: string;
  suburbId: number;
  categoryId: number;
  id: number;
  description: string;
  price: string;
};

export interface InvitedLeadItf extends CommonLeadItf {
  contactName: string;
}

export interface AcceptedLeadItf extends CommonLeadItf {
  contactName: string;
  contactPhone: string;
  contactEmail: string;
}
