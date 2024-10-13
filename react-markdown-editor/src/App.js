import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');
  const textareaRef = useRef(null);  // Reference to the textarea

  // Function to insert markdown at the cursor position
  const insertMarkdownAtCursor = (syntax) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    const before = markdown.substring(0, start);
    const after = markdown.substring(end, markdown.length);

    // Update markdown content with inserted syntax at the cursor
    setMarkdown(before + "\n"+syntax + after);

    // Set cursor position after the inserted syntax
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + syntax.length;
      textarea.focus();
    }, 0);
  };

  return (
    <div className="app-container">
      <div className="editor-section">
        <div className="toolbar">
          {/* Markdown formatting buttons */}
          <button onClick={() => insertMarkdownAtCursor('# Heading 1\n')}>H1</button>
          <button onClick={() => insertMarkdownAtCursor('## Heading 2\n')}>H2</button>
          <button onClick={() => insertMarkdownAtCursor('### Heading 3\n')}>H3</button>
          <button onClick={() => insertMarkdownAtCursor('**Bold**')}>Bold</button>
          <button onClick={() => insertMarkdownAtCursor('*Italic*')}>Italic</button>
          <button onClick={() => insertMarkdownAtCursor('~~Strikethrough~~')}>Strikethrough</button>
          <button onClick={() => insertMarkdownAtCursor('> Blockquote\n')}>Blockquote</button>
          <button onClick={() => insertMarkdownAtCursor('```\nCode Block\n```\n')}>Code Block</button>
          <button onClick={() => insertMarkdownAtCursor('`Inline Code`')}>Inline Code</button>
          <button onClick={() => insertMarkdownAtCursor('- List Item\n')}>List</button>
          <button onClick={() => insertMarkdownAtCursor('1. Numbered List Item\n')}>Numbered List</button>
          <button onClick={() => insertMarkdownAtCursor('![md](image-url)\n')}>Image</button>
          <button onClick={() => insertMarkdownAtCursor('[Link Text](https://example.com)\n')}>Link</button>
          <button onClick={() => insertMarkdownAtCursor('---\n')}>Horizontal Rule</button>
        </div>
        <textarea
          ref={textareaRef}  // Attach the ref to textarea
          className="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write your markdown here..."
        />
      </div>

      <div className="preview-section">
        <h2>Markdown Preview</h2>
        <div className="preview">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
