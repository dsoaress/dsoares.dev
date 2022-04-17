import type { PropertyValue } from '@stitches/react'

export const utils = {
  m: (value: PropertyValue<'margin'>) => ({
    margin: value
  }),
  mt: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value
  }),
  mr: (value: PropertyValue<'marginRight'>) => ({
    marginRight: value
  }),
  mb: (value: PropertyValue<'marginBottom'>) => ({
    marginBottom: value
  }),
  ml: (value: PropertyValue<'marginLeft'>) => ({
    marginLeft: value
  }),
  mx: (value: PropertyValue<'marginLeft' | 'marginRight'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: PropertyValue<'marginTop' | 'marginBottom'>) => ({
    marginTop: value,
    marginBottom: value
  }),

  p: (value: PropertyValue<'padding'>) => ({
    padding: value
  }),
  pt: (value: PropertyValue<'paddingTop'>) => ({
    paddingTop: value
  }),
  pr: (value: PropertyValue<'paddingRight'>) => ({
    paddingRight: value
  }),
  pb: (value: PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value
  }),
  pl: (value: PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value
  }),
  px: (value: PropertyValue<'paddingLeft' | 'paddingRight'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: PropertyValue<'paddingTop' | 'paddingBottom'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),

  size: (value: PropertyValue<'width' | 'height'>) => ({
    width: value,
    height: value
  })
}
