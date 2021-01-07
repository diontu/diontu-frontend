import React, { Component } from "react"
import { Divide } from "react-feather"

class BlogEditCard extends Component {
  // requires 3 methods to change the state of the variables that was used to render this
  // onChangeTitle(changedTitle)
  // onChangePreview(changedPreview)
  // onChangeDesc(changedDesc)
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ 
          display: "inline-block",
          width: "100%" 
        }}>
        {/* BlogTitle */}
        <div>
          <div style={{
            display: "inline-block",
            width: "20%"
          }}>
              {/* Title */}
          </div>
          <div style={{
            display: "inline-block",
            width: "80%"
          }}>
              {/* Blog Title Edit Box */}
          </div>  
        </div>
        {/* Blog Preview */}
        <div>
          <div style={{
            display: "inline-block",
            width: "20%"
          }}>
              {/* Preview */}
          </div>
          <div style={{
            display: "inline-block",
            width: "80%"
          }}>
              {/* Blog Preview Edit Box */}
          </div>  
        </div>
        {/* BlogDescription */}
        <div>
          <div style={{
            display: "inline-block",
            width: "20%"
          }}>
              {/* Title */}
          </div>
          <div style={{
            display: "inline-block",
            width: "80%"
          }}>
              {/* Blog Description Edit Box */}
          </div>  
        </div>
      </div>
    )
  }
}
