import React from "react";
import { Tabs } from "../components/tabs";
import { LeadTabItf } from "./const";

export const Leads = () => {
  return (
    <div>
      <Tabs<LeadTabItf>
        tabs={[
          {
            title: "invited",
            content: <div>Yay</div>,
          },
          {
            title: "accepted",
            content: <div>Yay</div>,
          },
        ]}
        defaultActiveTab="invited"
      />
    </div>
  );
};
