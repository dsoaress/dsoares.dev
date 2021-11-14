import { ScaleValue } from '@stitches/react'

export const utils = {
  marginX: (value: string | ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  marginY: (value: string | ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  paddingX: (value: string | ScaleValue<'space'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingY: (value: string | ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value
  })
}
