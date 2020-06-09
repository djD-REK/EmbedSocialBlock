import React from "react"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const { embedHTML } = props // Destructure the props

  // Load the Twitter embed external script file
  props.utils.addScript(
    "https://platform.twitter.com/widgets.js",
    false, // optional boolean: include the defer attribute
    true // optional boolean:  include the async attribute,
  )

  // Load the Instagram embed external script file
  props.utils.addScript(
    "https://www.instagram.com/embed.js",
    false, // optional boolean: include the defer attribute
    true // optional boolean:  include the async attribute,
  )

  // The editorFull Element Proptype returns html as text, not HTML markup.
  // React requires an object with the __html property to mark it as HTML:
  const outputAsMarkup = { __html: embedHTML }

  // Make a <div> element based on the banner text using the custom styles:
  const outputDiv = (
    <div
      // Combine Atomic CSS classes with custom styles using joinClasses:
      className="ma0 pa3"
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
