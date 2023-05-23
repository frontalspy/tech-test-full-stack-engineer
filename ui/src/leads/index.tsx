import React from "react";
import { Tabs } from "../components/tabs";
import { LeadTabItf } from "./const";
import { useGetLeads } from "./hooks";
import { Lead } from "./lead";
import { LeadType } from "./interface";
import { LeadsContainer } from "./styles";

export const Leads = () => {
  const { accepted, invited } = useGetLeads();

  const handleAction = (leadId: number, type: LeadType) => {
    console.log(leadId, type);
  };

  if (!accepted || !invited) return null;

  return (
    <LeadsContainer>
      <Tabs<LeadTabItf>
        tabs={[
          {
            title: "invited",
            content: invited.map((data) => (
              <Lead
                content={{ leadType: "invited", data }}
                onAction={handleAction}
              />
            )),
          },
          {
            title: "accepted",
            content: accepted.map((data) => (
              <Lead
                content={{ leadType: "accepted", data }}
                onAction={handleAction}
              />
            )),
          },
        ]}
        defaultActiveTab="invited"
      />
    </LeadsContainer>
  );
};
