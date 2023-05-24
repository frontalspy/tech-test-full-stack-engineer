import styled, { css } from "styled-components";
import { colours, fontSizes, padding } from "../shared/styles";
import { Button } from "../components/buttons";
import { ButtonComponent } from "../components/buttons/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LeadsContainer = styled.div`
  padding: ${padding.sm};
  color: ${colours.darkGrey};
  max-width: 64rem;
  margin: auto;
`;

// Lead component

const sharedFlexStyles = css`
  display: flex;
  padding: 0 ${padding.md};
  padding-bottom: ${padding.md};
  border-bottom: 1px solid ${colours.grey};
`;

export const LeadTitle = styled.div`
  ${sharedFlexStyles}
`;

export const LeadTitleText = styled.div`
  display: flex;
  flex-flow: column wrap;
  text-align: left;
  padding-left: ${padding.sm};
  color: ${colours.black};

  time {
    margin: 0;
    padding: 0;
  }
`;

export const LeadMeta = styled.div`
  ${sharedFlexStyles}
  padding-top: ${padding.md};
  flex-flow: row wrap;
`;

export const LeadData = styled.div`
  margin-right: ${padding.md};

  svg {
    margin-right: ${padding.xs};
  }

  a {
    text-decoration: none;
    color: ${colours.primary};
    font-size: ${fontSizes.md};
    font-weight: 700;
  }
`;

export const LeadAddress = styled.address`
  font-style: normal;
  margin-right: ${padding.md};

  svg {
    margin-right: ${padding.xs};
  }
`;

export const LeadContent = styled.div`
  ${sharedFlexStyles}
`;

export const LeadActions = styled.div`
  ${sharedFlexStyles}
  align-items: center;
  padding-top: ${padding.md};
  border-bottom: none;
  color: ${colours.darkGrey};

  ${ButtonComponent} {
    margin-right: ${padding.md};
  }
`;

export const ProfilePicture = styled.div<{ initials: string }>`
  width: 2em;
  height: 2em;
  font-size: ${fontSizes.lg};
  border-radius: 50%;
  background-color: ${colours.primary};
  color: ${colours.white};
  position: relative;
  text-align: center;

  // We use the :before pseudo element to display the initials
  // since this is a picture and we don't need people trying
  // to highlight the intials. It's also purely decorative
  &:before {
    content: "${({ initials }) => initials}";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
  }
`;
