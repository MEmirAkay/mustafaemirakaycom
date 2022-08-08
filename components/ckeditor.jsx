import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Link from "next/link";



class CKEditorApp extends Component {
  constructor(props) {
    super(props);
    this.state = { content_header: "", content: "" , pictureUrl:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    const d = new Date();
    const today = (d.getDate()+"."+(1+d.getMonth())+"."+d.getFullYear()).toString();
    

   fetch("/api/admin/article", {
      method: "POST",
      headers:{api_token: JSON.parse(localStorage.api_token)},
      body: JSON.stringify({
        author:"Emir Akay",
        date: today,
        header: this.state.content_header,
        content: this.state.content,
        pictureurl: this.state.pictureUrl
      })
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-lg mx-auto space-y-5 grid-rows-3">
        <form onSubmit={this.handleSubmit}>
          <div>
            {/* başlık */}
            <h1>Başlık</h1>
            <input
              name="content_header"
              value={this.state.content_header}
              onChange={this.handleChange}
              type="text"
              className="w-full py-2 px-2 font-semibold text-2xl border-2 outline-none rounded-md focus:border-green-400 duration-300"
            ></input>
          </div>
          <div>
          <h1>Resim URL</h1>
          <input
              name="pictureUrl"
              value={this.state.pictureUrl}
              onChange={this.handleChange}
              type="text"
              className="w-full py-2 px-2 font-light text-xl border-2 outline-none rounded-md focus:border-green-400 duration-300"
            ></input>
          </div>
          
          <div>
            {/* içerik */}
            <h1>İçerik</h1>

            <CKEditor
              name="content"
              editor={ClassicEditor}
              data={this.state.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({content: data}); 
              }}
            />
            
            <button
              onClick={()=>{this.props.router.push("/admin")}}
              type="submit"
              value="Submit"
              className="border-2 w-full py-5 mt-5 text-xl font-semibold hover:text-white outline-none rounded-md focus:border-green-400 hover:bg-green-400 duration-300"
            >
              Submit
            </button>
            
           
            
          </div>
        </form>
      </div>
    );
  }
}

export default CKEditorApp;
