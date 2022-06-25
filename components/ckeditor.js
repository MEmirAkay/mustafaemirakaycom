import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class CKEditorApp extends Component {
  render() {
    submitArticle = (article_header,article_content) => {
      const d = new Date();
      const date = d.getDate() + "." + d.getMonth() + "." + d.getFullYear();

      // post req for api to save mongodb


        await fetch("/api/hello", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((responseJson) => {
            setData(responseJson);
          });
      
      
    };

    return (
      <div className="container-lg mx-auto space-y-5 grid-rows-3">
        <div>
          <h1 className="text-3xl">Welcome to Admin Panel</h1>
        </div>

        <div>
          {/* başlık */}
          <h1>Başlık</h1>
          <input
            type="text"
            className="w-full py-2 px-2 font-semibold text-2xl border-2 outline-none rounded-md focus:border-green-400 duration-300"
          ></input>
        </div>
        <div>
          {/* içerik */}
          <h1>İçerik</h1>

          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />

          <button
            onClick={() => {
              submitArticle();
            }}
            className="border-2 w-full py-5 mt-5 text-xl font-semibold hover:text-white outline-none rounded-md focus:border-green-400 hover:bg-green-400 duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default CKEditorApp;
