import React, { useMemo, useState } from "react";
import {
  TabContainer,
  TabContent,
  TabContentContainer,
  TabTitle,
  TabTitleContainer,
} from "./styles";
import { capitalise } from "../../shared/utils";

type TabsProps<T> = {
  tabs: {
    title: T;
    content: React.ReactNode;
  }[];
  defaultActiveTab: T;
};

export const Tabs = <T extends string>({
  tabs,
  defaultActiveTab,
}: TabsProps<T>) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const tabTitles = useMemo(() => {
    return tabs.map((t) => t.title);
  }, []);

  return (
    <TabContainer>
      <TabTitleContainer>
        {tabTitles.map((title, index) => (
          <TabTitle
            active={activeTab === title}
            aria-selected={activeTab === title}
            role="tab"
            key={title}
            onClick={() => setActiveTab(title)}
            onKeyDown={(e) => {
              e.key === "space" && setActiveTab(title);
            }}
            tabIndex={index}
          >
            {capitalise(title)}
          </TabTitle>
        ))}
      </TabTitleContainer>
      <TabContentContainer>
        {tabs.map((tab) =>
          tab.title === activeTab ? (
            <TabContent role="tabpanel" key={tab.title} aria-label={tab.title}>
              {tab.content}
            </TabContent>
          ) : null
        )}
      </TabContentContainer>
    </TabContainer>
  );
};
