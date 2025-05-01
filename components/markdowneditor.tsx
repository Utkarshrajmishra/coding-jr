import React, { useState } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";


type MarkDownEditorProps={
    desc: string;
    setDesc:(val:string)=>void;
}

const MarkDownEditor = ({desc, setDesc}:MarkDownEditorProps) => {

  return (
    <div>
      <p className="text-neutral-700 mb-2 text-xs sm:text-sm font-medium">
        Description
      </p>

      <div data-color-mode="light">
        <MDEditor
          value={desc}
          onChange={(val) => setDesc(val || "")}
          commands={[
            commands.title,
            commands.bold,
            commands.italic,
            commands.strikethrough,
            commands.hr,
            commands.group(
              [commands.link, commands.quote, commands.code, commands.image],
              {
                name: "group-1",
              }
            ),
            commands.group(
              [
                commands.unorderedListCommand,
                commands.orderedListCommand,
                commands.checkedListCommand,
              ],
              {
                name: "group-2",
              }
            ),
          ]}
        />
      </div>
    </div>
  );
};

export default MarkDownEditor;
