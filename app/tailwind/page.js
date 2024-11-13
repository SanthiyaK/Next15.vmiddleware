import React from 'react'

export default function page() {
  return (
    <>
      <div className="bg-black"> Black BackGround</div>  {/* background-black -No Range Value */ }
      <div className="bg-white"> White BackGround</div>  {/* background-white -No Range Value*/}
      <div className="bg-transparent"> Transparent BackGround</div> {/* background-transparent-No Range Value */}
      <div className="bg-current"> Current BackGround</div> {/* background-current -No Range Value */}
      <div className="bg-blue-500"> Blue BackGround</div>  {/* Range from 50-900 */}
      <div className="bg-green-500"> Green BackGround</div>{/* Range from 50-900 */}
      <div className="bg-yellow-500"> Yellow BackGround</div>{/* Range from 50-900 */}
      <div className="bg-gray-500"> Gray BackGround</div>{/* Range from 50-900 */}
      <div className="bg-slate-100"> Slate BackGround</div>{/* Range from 50-900 */}
      <div className="bg-indigo-500"> Indigo BackGround</div>{/* Range from 50-900 */}
      <div className="bg-sky-500/100"> SKY BackGround</div> {/* 100 is a opacity */}
      <div className="bg-sky-500/75"> sky BackGround</div> {/* 75 is a opacity */}
      <div className="bg-cyan-500"> Cyan BackGround</div>{/* Range from 50-900 */}
      <div className="bg-red-500"> Red BackGround</div>{/* Range from 50-900 */}
      <div className="bg-purple-500"> Purple BackGround</div>{/* Range from 50-900 */}
      <div className="bg-pink-500"> Pink BackGround</div>{/* Range from 50-900 */}
     {/*   Solid Colors: bg-black, bg-white, bg-transparent, bg-current (no range).
          Colors with a Range (50-900): 
          Blue, Green, Yellow, Gray, Slate, Indigo, Cyan, Red, Purple, Pink.
          Opacity: You can use classes like bg-color/75 for different levels of transparency. */}
          {/*bg-{color}-50 – Very light blue
            bg-{color}-500 – Medium blue
            bg-{color}-900 – Dark blue */}
            </>
  )
}
