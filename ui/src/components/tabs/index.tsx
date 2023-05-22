import React, { useMemo, useState } from "react";
import {
  TabContainer,
  TabContent,
  TabContentContainer,
  TabTitle,
  TabTitleContainer,
} from "./styles";

type TabsProps<T> = {
  tabs: {
    title: T;
    content: React.ReactNode;
  }[];
  defaultActiveTab: T;
};

export const Tabs = <T extends unknown>({
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
        {tabTitles.map((title) => (
          <TabTitle
            active={activeTab === title}
            aria-selected={activeTab === title}
            role="tab"
          >
            {title}
          </TabTitle>
        ))}
      </TabTitleContainer>
      <TabContentContainer>
        {tabs.map((tab) =>
          tab.title === activeTab ? (
            <TabContent role="tabpanel">{tab}</TabContent>
          ) : null
        )}
      </TabContentContainer>
    </TabContainer>
  );
};
