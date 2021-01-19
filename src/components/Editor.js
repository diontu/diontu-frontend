import React from "react"
import { Editor, EditorState, ContentState } from "draft-js"

class TheEditor extends React.Component {
  // requires a method to change the state of the variable
  // REQUIRED VARIABLES:
  // currentState - a string that contains the content
  // REQUIRED METHODS:
  // onChangeState(changedState) - method that changes the state of the content
  constructor({ id, currentContent, onChangeState }) {
    super()
    // initiate state
    this.state = {
      editorState: EditorState.createWithContent(ContentState.createFromText(`${currentContent}`)),
    }
    // ensure newTitle, newPreview, and newDesc has currentContent
    onChangeState(id, currentContent)

    this.onChange = (editorState) => {
      onChangeState(id, editorState.getCurrentContent().getPlainText())
      // console.log(editorState.getCurrentContent().getPlainText())
      this.setState({ editorState })
    }
  }

  render() {
    return (
      <div>
        <div style={styles.editor}>
          <Editor editorState={this.state.editorState} onChange={this.onChange} />
        </div>
      </div>
    )
  }
}

let size = {}

const styles = {
  editor: {
    position: "relative",
    width: "auto",
    minHeight: "4em",
    maxHeight: "200px",
    overflow: "auto",
    padding: "5px",
    margin: "10px",
    textAlign: "left",
    border: "1px solid gray",
    borderRadius: "5px",
  },
}

export default TheEditor
