import React, { useCallback, useState } from "react";
import { Tabs } from "../components/tabs";
import { LeadTabItf } from "./const";
import { useGetLeads } from "./hooks";
import { Lead } from "./lead";
import { LeadAction, LeadType } from "./interface";
import { LeadsContainer } from "./styles";
import { putUpdateLead } from "./apis";

export const Leads = () => {
  const [loading, setLoading] = useState(false);
  const { accepted, invited } = useGetLeads(loading);

  const handleAction = useCallback((leadId: number, type: LeadAction) => {
    setLoading(true);
    putUpdateLead(leadId, type)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (!accepted || !invited || loading) return null;

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
                key={data.id}
              />
            )),
          },
          {
            title: "accepted",
            content: accepted.map((data) => (
              <Lead
                content={{ leadType: "accepted", data }}
                onAction={handleAction}
                key={data.id}
              />
            )),
          },
        ]}
        defaultActiveTab="invited"
      />
    </LeadsContainer>
  );
};
