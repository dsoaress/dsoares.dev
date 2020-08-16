import styled from 'styled-components'
import { Calendar } from '@styled-icons/boxicons-regular/Calendar'
import { TimeFive as Clock } from '@styled-icons/boxicons-regular/TimeFive'

export const Meta = styled.span`
  color: var(--medium);
  font-style: italic;
  font-size: 0.75rem;
`

export const CalendarIcon = styled(Calendar)`
  color: var(--highLight);
  width: 15px;
  margin: -2px 2px 0 0;
`

export const ClockIcon = styled(Clock)`
  color: var(--highLight);
  width: 15px;
  margin: -2px 2px 0 20px;
`
