import { ScaleValue } from '@stitches/react'

export const utils = {
  marginX: (value: string | number | ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  marginY: (value: string | number | ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  paddingX: (value: string | number | ScaleValue<'space'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingY: (value: string | number | ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  inset: (value: string | number | ScaleValue<'space'>) => ({
    top: value,
    left: value,
    right: value,
    bottom: value
  }),
  insetX: (value: string | number | ScaleValue<'space'>) => ({
    left: value,
    right: value
  }),
  insetY: (value: string | number | ScaleValue<'space'>) => ({
    top: value,
    bottom: value
  })
}
