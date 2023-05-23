import React, { useCallback } from "react";
import { AcceptedLeadItf, InvitedLeadItf, LeadType } from "./interface";
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
  onAction: (leadId: number, action: LeadType) => void;
};

export const Lead: React.FC<LeadProps> = ({ content, onAction }) => {
  const { data, leadType } = content;

  const handleAction = useCallback((leadId: number, leadType: LeadType) => {
    onAction(leadId, leadType);
  }, []);

  return (
    <Card>
      <LeadTitle>
        <ProfilePicture initials={data.name.charAt(0).toUpperCase()} />
        <LeadTitleText>
          <strong>{data.name}</strong>
          <time dateTime={data.dateCreated}>{data.dateCreated}</time>
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
  onAction: (leadId: number, action: LeadType) => void;
}) => {
  const handleAction = useCallback((leadType: LeadType) => {
    onAction(data.Id, leadType);
  }, []);

  return (
    <>
      <LeadMeta>
        <LeadAddress>
          <FontAwesomeIcon icon={faMapMarker} />
          {data.suburb}
        </LeadAddress>
        <LeadData>
          <FontAwesomeIcon icon={faBriefcase} /> {data.category}
        </LeadData>
        <LeadData>Job ID: {data.Id}</LeadData>
      </LeadMeta>
      <LeadContent>
        <p>{data.description}</p>
      </LeadContent>
      <LeadActions>
        <Button variant="primary" onClick={() => handleAction("accepted")}>
          Accept
        </Button>
        <Button variant="secondary" onClick={() => handleAction("invited")}>
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
        {data.suburb}
      </LeadAddress>
      <LeadData>
        <FontAwesomeIcon icon={faBriefcase} /> {data.category}
      </LeadData>
      <LeadData>Job ID: {data.Id}</LeadData>
      <LeadData>${data.price} Lead Invitation</LeadData>
    </LeadMeta>
    <LeadMeta>
      <LeadData>
        <a href={`tel:${data.phone}`}>
          <FontAwesomeIcon icon={faPhone} /> {data.phone}
        </a>
      </LeadData>
      <LeadData>
        <a href={`mailto:${data.email}`}>
          <FontAwesomeIcon icon={faEnvelope} /> {data.email}
        </a>
      </LeadData>
    </LeadMeta>
    <LeadContent>
      <p>{data.description}</p>
    </LeadContent>
  </>
);
