import Head from "next/head";
import { React, useEffect, useState } from "react";
import Link from "next/link";
import { server } from "../config";
import Modal from "react-modal";

export default function Admin() {

    return (
        <div className="w-full h-full pt-10">
            <Head>
                <title>MEA</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto w-9/12">
                <div className="flex flex-row justify-center my-auto align-middle ">

                    <form >
                        <div className="text-center">
                            <h1 className="text-2xl">Admin Panel</h1>
                        </div>
                        <div className="p-2">
                            <input
                                name="usern"
                                type="text"
                                placeholder="Username"
                                className="w-full py-2 px-2 font-light text-2xl border-2 outline-none rounded-md focus:border-green-400 duration-300"
                            ></input>
                        </div>
                        <div className="p-2">
                            <input
                                name="passw"
                                type="password"
                                placeholder="Password"
                                className="w-full py-2 px-2 font-light text-2xl border-2 outline-none rounded-md focus:border-green-400 duration-300"
                            ></input>
                        </div>
                        <div className="p-2">
                            <button
                                type="submit"
                                value="Submit"
                                className="border-2 hover:border w-full py-5 mt-5 text-xl font-semibold hover:text-white outline-none rounded-md focus:border-green-400 hover:bg-green-400 duration-300"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                </div>

            </div>


        </div>
    );
}
