import styled from "styled-components"

import { Orcid } from "@styled-icons/fa-brands/Orcid"
import { AlternateEmail } from "@styled-icons/material/AlternateEmail"
import { LocationMarker } from "@styled-icons/heroicons-solid/LocationMarker"
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal"
import { ClockOutline } from "@styled-icons/evaicons-outline/ClockOutline"

export const CVWrapper = styled.section`
  max-width: 800px;
`

export const Title = styled.h1`
  padding-bottom: 0.5rem;
  margin-bottom: 0.2rem;
  border-bottom: 1px solid #3d4555;
`

export const DataTitle = styled.h2`
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
  margin: 2rem 0 0.2rem;
  border-bottom: 1px solid #3d4555;
`

export const DataSubTitle = styled.h3`
  font-size: 0.9rem;
  margin-top: 30px;
  padding: 20px;
  background: #272c35;

  a {
    color: #dadada;

    &:hover {
      color: #ff5184;
    }
  }
`

export const Bio = styled.div`
  margin-top: 20px;
`

export const DataGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 0 20px;
`

export const DataYear = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #ff5184;
  min-width: 90px;
`

export const DataDesc = styled.div``

export const OrcidIcon = styled(Orcid)`
  width: 18px;
  color: #ff5184;
`

export const EmailIcon = styled(AlternateEmail)`
  width: 20px;
  margin-top: -2px;
  color: #ff5184;
`

export const LocationlIcon = styled(LocationMarker)`
  width: 20px;
  margin-top: -4px;
  color: #ff5184;
`

export const LinkIcon = styled(LinkExternal)`
  width: 20px;
  margin: -3px 0 0 5px;
  color: #ff5184;
`

export const ClockIcon = styled(ClockOutline)`
  width: 20px;
  margin-top: -3px;
  color: #ff5184;
`
