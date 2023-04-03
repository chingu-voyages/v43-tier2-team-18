import * as React from 'react'
import { Navbar } from "../components";

function DestinationGuide() {
    return (
        <React.Fragment>
            <header className="h-xl bg-slate-200">
                <Navbar />
                <h1 className="text-2xl font-bold text-center my-2">Popular Destinations</h1>

                <div className="container flex gap-4 mt-4 justify-center">
                    <div className="h-64 outline grow-1">
                        <img className='h-48 rounded-xl' src="https://www.nationsonline.org/gallery/Switzerland/Sunrise-on-the-Matterhorn.jpg" alt="" />
                        <p className="font-bold text-xl pt-2">Switzerland</p>
                    </div>

                    <div className="h-64 outline grow-1">
                        <img className='w-full h-48 rounded-xl' src="https://media.architecturaldigest.com/photos/5d37554e47a77b000872bbf4/16:9/w_2560%2Cc_limit/GettyImages-847708760.jpg" alt="" />
                        <p className="font-bold text-xl pt-2">Belgrade</p>
                    </div>

                    <div className="h-64 outline">
                        <img className='w-full h-48 rounded-xl' src="https://a1.cdn.japantravel.com/photo/12865-215185/1440x960!/tokyo-tokyo-prefecture-215185.jpg" alt="" />
                        <p className="font-bold text-xl pt-2">Akihabara</p>
                    </div>
                </div>
            </header>

            <main className='sm:p-2'>
                <h2 className='text-center font-bold text-xl'>Popular locations</h2>

                <section className='grid grid-cols-3 md:gap-6 sm:gap-2 place-center px-20 md:px-2'>
                    <div className="bg-slate-200 h-48"></div>
                    <div className="bg-slate-200 h-48"></div>
                    <div className="bg-slate-200 h-48"></div>
                    <div className="bg-slate-200 h-48"></div>
                    <div className="bg-slate-200 h-48"></div>
                    <div className="bg-slate-200 h-48"></div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default DestinationGuide