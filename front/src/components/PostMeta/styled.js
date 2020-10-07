import styled from 'styled-components'
import { BiCalendar, BiTimeFive } from 'react-icons/bi'

export const Meta = styled.span`
  color: var(--medium);
  font-style: italic;
  font-size: 0.75rem;
`

export const CalendarIcon = styled(BiCalendar)`
  color: var(--highLight);
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin: -2px 2px 0 0;
`

export const ClockIcon = styled(BiTimeFive)`
  color: var(--highLight);
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin: -2px 2px 0 20px;
`
