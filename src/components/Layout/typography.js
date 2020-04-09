import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  scaleRatio: 7,
  headerFontFamily: ["Rubik", "sans-serif"],
  bodyFontFamily: ["Rubik", "sans-serif"],

  overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
    blockquote: {
      ...adjustFontSizeTo("14px"),
      lineHeight: 1.4,
      fontStyle: "italic",
      paddingLeft: rhythm(13 / 16),
      borderLeft: `${rhythm(3 / 16)} solid var(--backgroundMedium)`,
    },
    ".footnotes": {
      ...adjustFontSizeTo("14px"),
      lineHeight: 1.4,
      fontStyle: "italic",
      marginTop: rhythm(2),
    },
    ".footnotes hr": {
      width: rhythm(8),
      background: "var(--default)",
    },
    ".footnotes p": {
      display: "inline",
    },
    "a.footnote-ref, a.footnote-backref": {
      borderBottom: "none",
    },
  }),
})

export default typography
