import React from "react"
import { Editor, EditorState, ContentState } from "draft-js"

/**
 * A rich text-editor.
 */
class TheEditor extends React.Component {
  constructor({ id, currentContent, onChangeState }) {
    super()
    // initiate state
    this.state = {
      editorState: EditorState.createWithContent(ContentState.createFromText(`${currentContent}`)),
    }
    // ensure new content is updated with the current content
    onChangeState(id, currentContent)

    this.onChange = (editorState) => {
      onChangeState(id, editorState.getCurrentContent().getPlainText())
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

const styles = {
  editor: {
    position: "relative",
    width: "auto",
    minHeight: "4em",
    maxHeight: "400px",
    overflow: "auto",
    padding: "5px",
    margin: "10px",
    textAlign: "left",
    border: "1px solid gray",
    borderRadius: "5px",
    fontFamily: "Courier"
  },
}

export default TheEditor
