import React, { Component } from "react";


class ArticleList extends Component {
  render() {
    return (
      <>
        {this.props.data &&
          this.props.data.map((e) => (
            <tr className="">
              <td className="py-2 px-5 border-2">{e.header}</td>
              <td className="py-2 px-5 border-2">{e.date}</td>
              <td className="py-2 px-5 border-2">
                <td>
                  <button className="hover:border-amber-500 hover:border-2 hover:shadow-md duration-300 rounded-lg w-20 h-16 text-white font-bold bg-amber-400">Edit</button>
                </td>
                <td>
                  <button className="hover:border-red-600 hover:border-2 hover:shadow-md duration-300 rounded-lg w-20 h-16 text-white font-bold bg-red-500">Delete</button>
                </td>

              </td>
            </tr>
          ))}
      </>
    );
  }
}



export default ArticleList;
