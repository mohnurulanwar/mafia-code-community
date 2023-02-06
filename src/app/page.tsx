import Image from 'next/image'
import image from './image.png'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <body className="body bg-black">
      <main className="main">
        <div className="title">
          <h2 className="font-bold text-center text-6xl py-7">Our Projects</h2>
        </div>

        <div className="subTitle flex items-center justify-center text-white">
          <h4 className="all mx-5">All</h4>
          <h4 className="ongoing mx-5">Ongoing</h4>
          <h4 className="done mx-5">Done</h4>
        </div>


      <div className="flex items-center justify-center h-screen text-white">

        <div className="card border- shadow m-7 bg-fuchsia-600 rounded-3xl">
          <span className="bg-1"></span>
          <div className="card-body border- shadow  m-7 bg-gray-500 rounded-3xl">
            <div className="card-title-1 p-2">
              <h5 className="project-title pb-1">Project 1</h5>
              <p className="description text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="button-detail-1 text-xs bg-cyan-600 text-white py-2 px-6 rounded-3xl">See Detail</button>
            </div>
          </div>
        </div>

        <div className="card border- shadow  m-7 bg-fuchsia-600 rounded-3xl">
          <div className="card-body border- shadow  m-7 bg-gray-500 rounded-3xl">
            <div className="card-title-2 p-2">
              <h5 className="project-title pb-1">Project 2</h5>
              <p className="description text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="button-detail-2 text-xs bg-cyan-600 text-white py-2 px-6 rounded-3xl">See Detail</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center ">
      <button className="all-project bg-cyan-800 text-white py-3 px-20 rounded-3xl">See All</button>
      </div>
      </main>
    </body>
  )
}
