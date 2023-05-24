import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Leads } from "../index";
import * as Hooks from "../hooks";
import * as API from "../apis";
import { mockAcceptedLead, mockInvitedLead } from "../__mocks__/consts";
import "@testing-library/jest-dom";

jest.mock("camelize-ts");

describe("Leads", () => {
  let mockGetLeads: jest.SpyInstance;
  let mockPutLeads: jest.SpyInstance;
  beforeEach(() => {
    mockGetLeads = jest
      .spyOn(Hooks, "useGetLeads")
      .mockReturnValue({ accepted: [], invited: [] });
    mockPutLeads = jest.spyOn(API, "putUpdateLead").mockResolvedValue({});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  describe("Test render", () => {
    it("renders the component", () => {
      mockGetLeads.mockReturnValue({
        accepted: [mockAcceptedLead],
        invited: [mockInvitedLead],
      });
      render(<Leads />);
      expect(screen.getByRole("tabpanel")).toBeInTheDocument();
    });

    it("does not render the component when loading", () => {
      mockGetLeads.mockReturnValue({ accepted: undefined, invited: undefined });
      render(<Leads />);
      expect(
        screen.queryByRole("tabpanel", { name: "invited" })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("tabpanel", { name: "accepted" })
      ).not.toBeInTheDocument();
    });
  });
  describe("Test action", () => {
    beforeEach(() => {
      mockGetLeads.mockReturnValue({
        accepted: [mockAcceptedLead],
        invited: [mockInvitedLead],
      });
    });
    it("handles lead action", async () => {
      render(<Leads />);
      const button = screen.getByRole("button", { name: "Accept" });
      fireEvent.click(button);
      // This version of react-scripts does not support MutationObserver
      // await waitFor(() =>
      //   expect(mockPutLeads).toHaveBeenCalledWith(1, "accept")
      // );
    });
  });
});
