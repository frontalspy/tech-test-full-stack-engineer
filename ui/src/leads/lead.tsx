import React, { useCallback } from "react";
import {
  AcceptedLeadItf,
  InvitedLeadItf,
  LeadAction,
  LeadType,
} from "./interface";
import {
  LeadActions,
  LeadAddress,
  LeadContent,
  LeadData,
  LeadMeta,
  LeadTitle,
  LeadTitleText,
  ProfilePicture,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Card } from "../components/cards";
import { Button } from "../components/buttons";
import {
  faBriefcase,
  faEnvelope,
  faMap,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Categories, Suburbs } from "./const";

type CommonLead = { leadType: LeadType };

interface AcceptedLead extends CommonLead {
  leadType: "accepted";
  data: AcceptedLeadItf;
}

interface InvitedLead extends CommonLead {
  leadType: "invited";
  data: InvitedLeadItf;
}

type LeadProps = {
  content: InvitedLead | AcceptedLead;
  onAction: (leadId: number, action: LeadAction) => void;
};

export const Lead: React.FC<LeadProps> = ({ content, onAction }) => {
  const { data, leadType } = content;

  const handleAction = useCallback((leadId: number, action: LeadAction) => {
    onAction(leadId, action);
  }, []);

  return (
    <Card>
      <LeadTitle>
        <ProfilePicture initials={data.contactName.charAt(0).toUpperCase()} />
        <LeadTitleText>
          <strong>{data.contactName}</strong>
          <time dateTime={data.createdAt}>{data.createdAt}</time>
        </LeadTitleText>
      </LeadTitle>
      {leadType === "invited" ? (
        <InvitedLeadContent data={data} onAction={handleAction} />
      ) : (
        <AcceptedLeadContent data={data} />
      )}
    </Card>
  );
};

const InvitedLeadContent = ({
  data,
  onAction,
}: {
  data: InvitedLeadItf;
  onAction: (leadId: number, action: LeadAction) => void;
}) => {
  const handleAction = useCallback((action: LeadAction) => {
    onAction(data.id, action);
  }, []);

  return (
    <>
      <LeadMeta>
        <LeadAddress>
          <FontAwesomeIcon icon={faMapMarker} />
          {Suburbs[data.suburbId]}
        </LeadAddress>
        <LeadData>
          <FontAwesomeIcon icon={faBriefcase} /> {Categories[data.categoryId]}
        </LeadData>
        <LeadData>Job ID: {data.id}</LeadData>
      </LeadMeta>
      <LeadContent>
        <p>{data.description}</p>
      </LeadContent>
      <LeadActions>
        <Button variant="primary" onClick={() => handleAction("accept")}>
          Accept
        </Button>
        <Button variant="secondary" onClick={() => handleAction("decline")}>
          Decline
        </Button>
        <div>
          <strong>${data.price}</strong> Lead Invitation
        </div>
      </LeadActions>
    </>
  );
};

const AcceptedLeadContent = ({ data }: { data: AcceptedLeadItf }) => (
  <>
    <LeadMeta>
      <LeadAddress>
        <FontAwesomeIcon icon={faMapMarker} />
        {Suburbs[data.suburbId]}
      </LeadAddress>
      <LeadData>
        <FontAwesomeIcon icon={faBriefcase} /> {Categories[data.categoryId]}
      </LeadData>
      <LeadData>Job ID: {data.id}</LeadData>
      <LeadData>${data.price} Lead Invitation</LeadData>
    </LeadMeta>
    <LeadMeta>
      <LeadData>
        <a href={`tel:${data.contactPhone}`}>
          <FontAwesomeIcon icon={faPhone} /> {data.contactPhone}
        </a>
      </LeadData>
      <LeadData>
        <a href={`mailto:${data.contactEmail}`}>
          <FontAwesomeIcon icon={faEnvelope} /> {data.contactEmail}
        </a>
      </LeadData>
    </LeadMeta>
    <LeadContent>
      <p>{data.description}</p>
    </LeadContent>
  </>
);
