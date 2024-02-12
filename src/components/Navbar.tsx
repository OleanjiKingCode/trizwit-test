import React, { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { syllabusesData } from "@/Data/syllabusesData";
import { HiOutlineMenu } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full hidden  md:flex flex-row items-center gap-3 border-b-[1px] border-slate-300 p-2  text-blue-500 font-medium">
        <div className=" text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium  ">
                Courses
                <IoMdArrowDropdown
                  className="-mr-1 ml-2 h-5 w-5 text-blue-500 "
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {syllabusesData.map((items, i) => {
                    return (
                      <Menu.Item key={i}>
                        <button
                          className={` flex w-full items-center rounded-md px-2 py-2 hover:bg-slate-200 text-sm`}
                        >
                          {items.name}
                        </button>
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="bg-slate-200 gap-3 flex flex-row items-center justify-center py-2 px-3 rounded-md">
          <input
            placeholder="Search"
            type="text"
            className="border-none w-28 font-base bg-transparent outline-none"
          />
          <RiSearch2Line className="cursor-pointer" />
        </div>
        <div className="text-4xl w-full text-center">Trizwit test</div>
        <div className=" gap-1 flex flex-row items-center justify-center py-2 px-3 rounded-md">
          <span>Donate</span>
          <AiOutlineExport />
        </div>
        <div className="w-28">
          <span>Log in</span>
        </div>
        <div className="w-28">
          <span>Sign up</span>
        </div>
      </div>
      <div className="w-full flex  md:hidden flex-row items-center gap-3 border-b-[1px] border-slate-300 p-2  text-blue-500 font-medium">
        <div className="text-2xl w-full text-start pl-2">Trizwit test</div>
        <div
          className="bg-slate-200 gap-3 flex flex-row items-center justify-center py-2 px-3 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <RiSearch2Line className="cursor-pointer" />
        </div>
        <div className=" gap-1 flex flex-row items-center justify-center py-2 px-3 rounded-md cursor-pointer">
          <HiOutlineMenu />
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Search For Courses
                  </Dialog.Title>
                  <input
                    placeholder="Search"
                    type="text"
                    className="border-black border-[1px] rounded-md w-full mt-4 p-2 font-lg bg-transparent outline-none"
                  />

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      //   onClick={() => setIsOpen(false)}
                    >
                      Search
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
