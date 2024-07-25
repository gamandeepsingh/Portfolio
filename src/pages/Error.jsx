import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <div class="main_wrapper">
                <div class="main">
                    <div class="antenna">
                        <div class="antenna_shadow"></div>
                        <div class="a1"></div>
                        <div class="a1d"></div>
                        <div class="a2"></div>
                        <div class="a2d"></div>
                        <div class="a_base"></div>
                    </div>
                    <div class="tv">
                        <div class="cruve">
                            {/* <svg
                                xml:space="preserve"
                                viewBox="0 0 189.929 189.929"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                class="curve_svg"
                            >
                                <path
                                    d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                                ></path>
                            </svg> */}
                        </div>
                        <div class="display_div">
                            <div class="screen_out">
                                <div class="screen_out1">
                                    <div class="screen">
                                        <span class="notfound_text"> NOT FOUND</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lines">
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                        </div>
                        <div class="buttons_div">
                            <div class="b1"><div></div></div>
                            <div class="b2"></div>
                            <div class="speakers">
                                <div class="g1">
                                    <div class="g11"></div>
                                    <div class="g12"></div>
                                    <div class="g13"></div>
                                </div>
                                <div class="g"></div>
                                <div class="g"></div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="base1"></div>
                        <div class="base2"></div>
                        <div class="base3"></div>
                    </div>
                </div>
                <div class="text_404">
                    <div class="text_4041">4</div>
                    <div class="text_4042">0</div>
                    <div class="text_4043">4</div>
                </div>
            </div>
            <div className='flex-col flex items-center'>
                <h1 className='text-4xl text-white -mt-5'>Page Not Found</h1>
                <button onClick={()=> navigate(-1)} className="btn-53 px-[3rem] py-[1.2rem] max-md:px-[2prem] max-md:py-[0.8rem] max-sm:text-sm max-sm:px-[1rem] max-sm:py-[0.8rem]">
                    <div className="original font-extrabold">GO BACK</div>
                    <div className="letters">
                        <span>G</span>
                        <span>O </span>
                        <span>&nbsp;</span>
                        <span>B</span>
                        <span>A</span>
                        <span>C</span>
                        <span>K</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Error