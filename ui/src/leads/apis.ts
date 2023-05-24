import { AcceptedLeadItf, InvitedLeadItf } from "./interface";
import camelize from "camelize-ts";

const baseUrl = "http://localhost:8080";

export const getAcceptedLeads = (): Promise<AcceptedLeadItf[]> =>
  fetchApi<AcceptedLeadItf[]>(`${baseUrl}/leads?type=accepted`);

export const getInvitedLeads = (): Promise<InvitedLeadItf[]> =>
  fetchApi<InvitedLeadItf[]>(`${baseUrl}/leads?type=invited`);

export const putUpdateLead = (
  leadId: number,
  leadAction: "accept" | "decline"
) =>
  fetchApi(`${baseUrl}/lead/${leadId}`, {
    method: "PUT",
    body: JSON.stringify({ action: leadAction }),
  });

const fetchApi = <T>(url: string, options?: RequestInit): Promise<T> =>
  fetch(encodeURI(url), {
    ...options,
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json().then((data) => camelize<T>(data) as T))
    .catch((err) => console.error(err) as T);
