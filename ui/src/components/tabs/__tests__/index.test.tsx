import {fireEvent, render} from "@testing-library/react";
import { Tabs } from "..";
import React from "react";
import "@testing-library/jest-dom";

describe("Test Tabs", () => {
  const tabs = [
    { title: "Tab 1", content: <div>Tab 1 content</div> },
    { title: "Tab 2", content: <div>Tab 2 content</div> },
    { title: "Tab 3", content: <div>Tab 3 content</div> },
  ];

  describe("Test render", () => {
    it("Should render three tabs with tab 1 enabled by default", () => {
      const tabs = [
        { title: "Tab 1", content: <div>Tab 1 content</div> },
        { title: "Tab 2", content: <div>Tab 2 content</div> },
        { title: "Tab 3", content: <div>Tab 3 content</div> },
      ];
      const { getByText, queryAllByRole } = render(
        <Tabs tabs={tabs} defaultActiveTab="Tab 1" />
      );
      expect(queryAllByRole("tab")).toHaveLength(3);
      expect(getByText("Tab 1 content")).toBeInTheDocument();
    });
  });
  describe("Test interaction", () => {
    it("Should swap tabs on click", () => {
      const { getByText } = render(<Tabs tabs={tabs} defaultActiveTab="Tab 1" />);
      fireEvent.click(getByText("Tab 3"));
      expect(getByText("Tab 3 content")).toBeInTheDocument();
    });
    it("Should swap tabs on keyboard actions", () => {
      const { getByText } = render(<Tabs tabs={tabs} defaultActiveTab="Tab 1" />);
      fireEvent.keyDown(getByText("Tab 2"), { key: "space", code: "space" });
      expect(getByText("Tab 2 content")).toBeInTheDocument();
    });
  });
});
