import styled from "styled-components"

import { AlternateEmail } from "@styled-icons/material/AlternateEmail"
import { LocationMarker } from "@styled-icons/heroicons-solid/LocationMarker"
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal"
import { ClockOutline } from "@styled-icons/evaicons-outline/ClockOutline"

export const CVWrapper = styled.section`
  max-width: 800px;
`

export const Title = styled.h1`
  font-size: 4rem;
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
  background: var(--backgroundMedium);

  a {
    color: var(--default);

    &:hover {
      color: var(--highLight);
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
  color: var(--highLight);
  min-width: 90px;
`

export const DataDesc = styled.div``

export const EmailIcon = styled(AlternateEmail)`
  width: 20px;
  margin-top: -2px;
  color: var(--highLight);
`

export const LocationlIcon = styled(LocationMarker)`
  width: 20px;
  margin-top: -4px;
  color: var(--highLight);
`

export const LinkIcon = styled(LinkExternal)`
  width: 20px;
  margin: -3px 0 0 5px;
  color: var(--highLight);
`

export const ClockIcon = styled(ClockOutline)`
  width: 20px;
  margin-top: -3px;
  color: var(--highLight);
`
