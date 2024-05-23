"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-green-100">
      <header className="bg-green-700 text-white p-4">
        <h1 className="text-3xl font-bold font-roboto">
          大学生エンジニアの個人サイト
        </h1>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        <section className="my-4">
          <h2 className="text-2xl font-semibold font-roboto">自己紹介</h2>
          <p className="mt-2 text-lg font-roboto">
            初めまして！私は大学でエンジニアリングを専攻している学生です。このサイトでは私のプロジェクトや経験について共有します。
          </p>
        </section>
        <section className="my-4">
          <h2 className="text-2xl font-semibold font-roboto">プロジェクト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold font-roboto">
                プロジェクト 1
              </h3>
              <p className="mt-1 font-roboto">
                こちらは私が取り組んだプロジェクトの一つです。
              </p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold font-roboto">
                プロジェクト 2
              </h3>
              <p className="mt-1 font-roboto">
                こちらは私が取り組んだ別のプロジェクトです。
              </p>
            </div>
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-2xl font-semibold font-roboto">連絡先</h2>
          <form className="bg-white p-4 shadow-md rounded-lg mt-2">
            <label className="block font-roboto mt-2">
              名前:
              <input
                type="text"
                name="name"
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label className="block font-roboto mt-2">
              メール:
              <input
                type="email"
                name="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded"
              />
            </label>
            <label className="block font-roboto mt-2">
              メッセージ:
              <textarea
                name="message"
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                rows="4"
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-4 bg-green-700 text-white py-2 px-4 rounded font-roboto"
            >
              送信
            </button>
          </form>
        </section>
      </main>
      <footer className="bg-green-700 text-white p-4 text-center">
        <p className="font-roboto">&copy; 2023 大学生エンジニア</p>
      </footer>
    </div>
  );
}

export default MainComponent;