import React, { useState, useEffect } from "react";
import { marked } from "marked";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // Set default Markdown content
    const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://www.example.com)
Inline code: \`console.log('Hello, world!');\`
\`\`\`
// Code block
function greeting(name) {
  return 'Hello, ' + name + '!';
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://www.example.com/image.jpg)
**Bold text**`;

    setMarkdown(defaultMarkdown);
  }, []);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Editor</h2>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleMarkdownChange}
          />
        </div>
        <div className="col-md-6">
          <h2>Preview</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
