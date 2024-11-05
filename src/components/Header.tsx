import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className="fixed overflow-hidden z-20 w-full dark:shadow-md dark:shadow-gray-950/10 border-b border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] backdrop-blur">
                <div className="max-w-6xl px-6 m-auto 2xl:px-0">
                    <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
                        <div className="flex items-center justify-between w-auto">
                            <a href="/" aria-label="tailus logo" className='text-xl'>
                                Roulette Calculator
                            </a>
                        </div>
                        {/* <div className="flex-wrap items-center justify-end p-0 w-fit lg:flex h-fit md:flex-nowrap">
                            <div className="flex flex-col items-center w-full gap-2 pt-6 pb-4 space-y-2 lg:pb-0 lg:flex-row lg:space-y-0 lg:w-fit lg:pt-0 lg:pl-2">
                                <button className="w-full h-9 lg:w-fit group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 *:disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border dark:disabled:border-gray-800 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15 lg:text-sm lg:h-8 px-3.5 justify-center">
                                    <span>Share</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}
