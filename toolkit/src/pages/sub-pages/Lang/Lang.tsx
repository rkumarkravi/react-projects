import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./Lang.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import beautify from "js-beautify";

export default function Lang() {
  const { langString } = useParams();
  const xmlContent = `
<root><element1>${langString}</element1><element2>Value2</element2></root>
`;
  const [unFormatedContent, setUnFormatedContent] = useState(xmlContent);
  const [formatedContent, setFormatedContent] = useState("");

  function formatContent() {
    let formattedString: string = "";
    if (langString === "XML" || langString === "HTML") {
      // Create a new DOMParser
      const parser = new DOMParser();
      try {
        // Parse the XML string
        const xmlDoc = parser.parseFromString(
          unFormatedContent,
          "application/xml"
        );

        // Serialize the DOM back to XML with custom formatting
        formattedString = xmlDoc.documentElement.outerHTML
          .replace(/></g, ">\n<")
          .replace(/\n{2,}/g, "\n");

        if (formattedString.includes("parsererror")) {
          formattedString = `Failed to pretify your ${langString} code`;
        }
      } catch (error: Error | any) {
        formattedString = error["message"];
      }
    } else if (langString === "JSON") {
      try {
        // Format JSON with indentation (e.g., 2 spaces)
        formattedString = JSON.stringify(
          JSON.parse(unFormatedContent),
          null,
          2
        );
      } catch (error: Error | any) {
        formattedString = error.message;
      }
    }else if(langString==="CSS"){
      formattedString=prettifyCSS(unFormatedContent);
    }
    setFormatedContent(`${formattedString}`);
  }

  function prettifyCSS(cssString) {
    let result = '';
  
    // Define the desired indentation (e.g., 2 spaces)
    const indentation = '  ';
    let level = 0;
  
    // Split the CSS string by '{' and '}'
    const cssParts = cssString.split(/({|})/);
  
    cssParts.forEach(part => {
      if (part === '}') {
        level--;
        result += '\n' + indentation.repeat(level) + part;
      } else if (part === '{') {
        result += ' ' + part + '\n' + indentation.repeat(++level);
      } else {
        result += part;
      }
    });
  
    return result;
  }

  function formatContentV2() {
    let formattedString="";
    if (langString === "CSS") {
      formattedString=beautify.css(unFormatedContent, { indent_size: 2 });
    }else if (langString === "HTML" || langString === "XML") {
      formattedString=beautify.html(unFormatedContent, { indent_size: 2 });
    }else if (langString === "JS") {
      formattedString=beautify.js(unFormatedContent, { indent_size: 2 });
    }
    setFormatedContent(`${formattedString}`);
  }

  return (
    <div className="format-style">
      <div className="side-by-side">
        <TextField
          id="outlined-textarea"
          label={`${langString} un-formated Code`}
          fullWidth
          multiline
          minRows={4}
          maxRows={100}
          color="success"
          value={unFormatedContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUnFormatedContent(event.target.value);
          }}
          variant="filled"
        />
        <TextField
          id="outlined-textarea"
          label={`${langString} formated Code`}
          fullWidth
          multiline
          minRows={4}
          maxRows={100}
          color="success"
          value={formatedContent}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormatedContent(event.target.value);
          }}
          variant="filled"
        />
      </div>
      <div className="format-buttons">
        <Button variant="contained" onClick={formatContentV2}>
          Format
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setUnFormatedContent("");
            setFormatedContent("");
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
