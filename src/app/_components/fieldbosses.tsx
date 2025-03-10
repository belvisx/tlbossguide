"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {bosses} from '@/lib/bosses'



export function FieldBosses(){

    const [embalRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }

    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section className=" py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Field Bosses</h2>

                <div className="relative">

                    <div className='overflow-hidden' ref={embalRef}>
                        <div className='flex'>
                            {bosses
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <Link href={item.link}>
                                        <article className='bg-[#6C3232] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col hover:opacity-75'>
                                            <div className='flex-1 flex items-start justify-between'>
                                                <div>
                                                    <span className='text-3xl flex justify-center'>
                                                        <img src={item.icon} alt={item.name} />
                                                    </span>
                                                    <div>
                                                        <h3 className='font-bold text-x1 my-1 flex justify-center'>{item.name}</h3>
                                                        <p className='text-gray-300 text-sm select-none flex justify-center'>{item.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={scrollPrev} className='bg-[#171717] flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute left-1 -translate-y-1/2 -translate-x-1/2 top-1/2'>
                        <ChevronLeft className='w-8 h-8 text-gray-300'/>
                    </button>

                    <button onClick={scrollNext} className='bg-[#171717] flex items-center justify-center rounded-full shadow-lg w-12 h-12 absolute -right-11 -translate-y-1/2 -translate-x-1/2 top-1/2'>
                        <ChevronRight className='w-8 h-8 text-gray-300'/>
                    </button>

                </div>
            
            
            </div>
        </section>
    )
}