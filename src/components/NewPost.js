import React from 'react';
import { Button} from 'react-bootstrap';
import { Route } from 'react-router-dom';
import "../style.css"

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

// code-syntax-highlight
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

// color-syntax
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { NULL } from 'sass';

function NewPost(props) {
  const editorRef = React.createRef();

  const onChangeEditorTextHandler = () => {
      console.log(editorRef.current.getInstance().getMarkdown());
  }

  return (
      <div className='newPost'>
          <textarea
              type="title"
              className='postTitle'
              placeholder="제목을 입력하세요"
          ></textarea>
          <textarea
              type="title"
              className='tag'
              placeholder="태그를 입력하세요"
          ></textarea>
          <Editor
              placeholder='sodyd'
              previewStyle="vertical"
              height="79vh"
              initialEditType="markdown"
              initialValue = ""
              ref={editorRef}
              plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
              onChange={onChangeEditorTextHandler}
          />
          <Button 
              variant="primary"
              type="submit"
              className="submitBtn"
          >Post</Button>
          <Button 
              variant="primary" 
              className="cancelBtn"
          >Cancel</Button>
      </div>
  )
}

export default NewPost
