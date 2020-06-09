import React, { useEffect } from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Get the custom styles to be used in this Block:
  const classes = StyleSheet.create(getStyles(props))
  // Element helper function to combine Atomic CSS with the custom styles:
  const joinClasses = props.joinClasses

  // Destructure the banner text and optional link from the props:
  const { embedHTML } = props

  // React's Effect Hook (useEffect) runs a function when the Block is rendered
  useEffect(() => {
    // Add a link to the third-party script
    props.utils.addScript(
      "https://platform.twitter.com/widgets.js",
      false, // optional boolean: include the defer attribute
      false // optional boolean:  include the async attribute,
    )
    console.log("test")
  }, [])
  // props.utils.addScript("https://platform.twitter.com/widgets.js")
  // The second parameter is an empty array, [], to make useEffect run just once

  // The editorFull Element Proptype returns html as text, not HTML markup.
  // React requires an object with the __html property to mark it as HTML:
  const outputAsMarkup = { __html: embedHTML }

  // Make a <div> element based on the banner text using the custom styles:
  const outputDiv = (
    <div
      // Combine Atomic CSS classes with custom styles using joinClasses:
      className={joinClasses("ma0 pa3", css(classes.banner))}
      // The class ma0 sets all margins to 0, and pa3 sets padding to 1rem.

      // dangerouslySetInnerHTML will render HTML markup, such as headings:
      dangerouslySetInnerHTML={outputAsMarkup}
      // The rich text editor used by the editorFull Element Proptype does
      // not allow <script> tags to prevent XSS (cross-site scripting).
    ></div>
  )

  return outputDiv
}

Block.defaultProps = defaultConfig

export default Block
