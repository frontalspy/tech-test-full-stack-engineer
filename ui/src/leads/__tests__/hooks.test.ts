import { useGetLeads } from "../hooks";
import * as API from "../apis";

import { renderHook } from "@testing-library/react-hooks";
import { mockAcceptedLead, mockInvitedLead } from "../__mocks__/consts";

describe("Test useGetLeads", () => {
  let mockGetAcceptedLeads: jest.SpyInstance;
  let mockGetInvitedLeads: jest.SpyInstance;
  beforeEach(() => {
    mockGetAcceptedLeads = jest
      .spyOn(API, "getAcceptedLeads")
      .mockResolvedValue([]);
    mockGetInvitedLeads = jest
      .spyOn(API, "getInvitedLeads")
      .mockResolvedValue([]);
  });
  it("returns leads data", async () => {
    mockGetAcceptedLeads.mockResolvedValueOnce([mockAcceptedLead]);
    mockGetInvitedLeads.mockResolvedValueOnce([mockInvitedLead]);

    const { result, waitForNextUpdate } = renderHook(() => useGetLeads(true));

    expect(result.current.accepted).toBeUndefined();
    expect(result.current.invited).toBeUndefined();

    await waitForNextUpdate();

    expect(result.current.accepted).toStrictEqual([mockAcceptedLead]);
    expect(result.current.invited).toStrictEqual([mockInvitedLead]);
  });
});
