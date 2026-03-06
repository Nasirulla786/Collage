import React from "react";
import ansh from "../../public/ansh.jpeg"
import indu from "../../public/indu.jpeg"
import  eccha from "../../public/eccha.jpeg"
import  raaz from "../../public/raaz.jpeg"
import  vansh from "../../public/vansh.jpeg"
import  anjali from "../../public/anjali.jpeg"
import  kan from "../../public/kan.jpeg"
import  anu from "../../public/anu.jpeg"
import  gul from "../../public/gul.jpeg"
import  kal from "../../public/kal.png"


// 👉 Replace image URLs with real photos later
const members = {
  president: {
    name: "Ansh Jaglan",
    role: "President",
    dept: "3rd Year BTECH CSE",
    img: ansh,
  },
  vicePresident: {
    name: "Indu Rani",
    role: "Vice President",
    dept: "3rd Year BTECH CSE",
    img: indu
  },
  technical: {
    head: {
      name: "Nasirulla",
      role: "Technical Secretary",
      dept: "BCA 2nd Year",
      img: raaz,
    },
    joints: [
      {
        name: "Gulshan",
        role: "Joint Technical Secretary",
        dept: "BCA 2nd Year",
        img: gul,
      },
      {
        name: "Vansh Kumar",
        role: "Joint Technical Secretary",
        dept: "BCA 2nd Year",
        img: vansh
      },
      {
        name: "Anjali",
        role: "Joint Technical Secretary",
        dept: "BTECH 3rd Year",
        img: anjali,
      },
    ],
  },
  designing: {
    head: {
      name: "Kalpana",
      role: "Designing Secretary",
      dept: "BTECH 3rd Year",
      img: kal,
    },
    joints: [
      {
        name: "Anu Tyagi",
        role: "Joint Design Secretary",
        dept: "",
        img: anu,
      },
    ],
  },
  industry: {
    name: "Kanhaiya Tyagi",
    role: "Industry Secretary",
    dept: "BTECH 3rd Year AIML",
    img: kan,
  },
  alumni: {
    name: "Eccha Vats",
    role: "Alumni Coordinator",
    dept: "",
    img: eccha,
  },
};

const Card = ({ data, gradient }: any) => (
  <div
    className={`bg-gradient-to-br ${gradient} p-[1px] rounded-2xl shadow-lg hover:scale-105 transition-transform`}
  >
    <div className="bg-slate-900 rounded-2xl p-5 flex flex-col items-center text-center">
      <img
        src={data.img}
        className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
      />
      <h3 className="mt-3 text-xl font-semibold text-white">{data.name}</h3>
      <p className="text-indigo-400">{data.role}</p>
      <p className="text-gray-400 text-sm">{data.dept}</p>
    </div>
  </div>
);

const Section = ({ title, children }: any) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">
      {title}
    </h2>
    {children}
  </div>
);

export default function Secretory() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">
        Student Council Secretory
      </h1>

      {/* Top Leadership */}
      <Section title="Leadership">
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card data={members.president} gradient="from-indigo-500 to-purple-500" />
          <Card data={members.vicePresident} gradient="from-purple-500 to-pink-500" />
        </div>
      </Section>

      {/* Technical */}
      <Section title="Technical Department">
        <div className="flex justify-center mb-10">
          <Card data={members.technical.head} gradient="from-indigo-500 to-purple-500" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.technical.joints.map((m: any, i: number) => (
            <Card
              key={i}
              data={m}
              gradient="from-purple-500 to-pink-500"
            />
          ))}
        </div>
      </Section>

      {/* Designing */}
      <Section title="Designing Department">
        <div className="flex justify-center mb-10">
          <Card data={members.designing.head} gradient="from-indigo-500 to-purple-500" />
        </div>

        <div className="flex justify-center">
          {members.designing.joints.map((m: any, i: number) => (
            <Card
              key={i}
              data={m}
              gradient="from-purple-500 to-pink-500"
            />
          ))}
        </div>
      </Section>

      {/* Others */}
      <Section title="Other Roles">
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card data={members.industry} gradient="from-indigo-500 to-purple-500" />
          <Card data={members.alumni} gradient="from-purple-500 to-pink-500" />
        </div>
      </Section>
    </div>
  );
}
