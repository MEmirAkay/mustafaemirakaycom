import React, { Component } from "react";
import Link from "next/link";

class ArticleList extends Component {
  render() {
    return (
      
        <table className="table-auto border-2 mx-auto w-full">
          <thead>
            <tr>
              <th className="border-2">Başlık</th>
              <th className="border-2">Yayın Tarihi</th>
              <th className="border-2" colSpan="2">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data &&
              this.props.data.map((e) => (
                <tr className=" text-lg">
                  <td className=" px-5 border-2">{e.header}</td>
                  <td className=" px-5 border-2">{e.date}</td>
                  
                    <td className="w-3/12  h-20 border-y-2">
                      <button className=" hover:shadow-md duration-300 w-full h-full text-white font-bold bg-amber-400">Edit</button>
                    </td>
                    <td className="w-3/12   h-20 border-y-2">
                      <button className=" hover:shadow-md duration-300 w-full h-full text-white font-bold bg-red-500" >Delete</button>
                    </td>    
                </tr>
              ))}
            <tr>
              <td colSpan="4">
                <Link href="/submitnew">
                  <button className="font-semibold hover:text-white outline-none focus:border-green-400 hover:bg-green-400 duration-300 w-full h-20">Yeni Ekle +</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      
    );
  }
}



export default ArticleList;
