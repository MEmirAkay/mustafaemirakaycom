import React, { Component } from "react";


class ArticleList extends Component{
  render() {
    return (
        <>
        {this.props.data &&
          this.props.data.map((e) => (
            <tr className="">
              <td className="py-2 px-5 border-2">{e.header}</td>
              <td className="py-2 px-5 border-2">{e.date}</td>
              <td className="py-2 px-5 border-2">
                <button className="rounded-lg w-20 h-full bg-amber-400">Edit</button>
                <button className="rounded-lg w-20 h-full bg-red-500">Delete</button>
              </td>
            </tr>
          ))}
      </>
        );
  }
}



export default ArticleList;
