import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { Syllabus } from "@/Data/syllabusesData";
import Image from "next/image";

export const Courses = () => {
  const [syllabuses, setSyllabuses] = useState<Syllabus[]>([]);

  useEffect(() => {
    // Fetch Syllabus data from the API route using Axios when the page loads
    axios
      .get<Syllabus[]>("/api/syllabuses")
      .then((response) => setSyllabuses(response.data))
      .catch((error) => console.error("Error fetching syllabuses:", error));
  }, []);

  return (
    <div className="w-full px-4 py-16">
      <div className="w-full rounded-md bg-gray-100 p-2">
        {/* mapping through the syllabuses data gotten from the api to show the accrodions */}
        {syllabuses.map((item, i) => (
          <Disclosure key={i}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between px-6 py-2 text-left text-sm font-medium text-black border-b-[2px] border-gray-400 mt-2">
                  <div className="flex flex-row gap-3 items-center">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span>{item.name}</span>
                  </div>

                  <IoMdArrowDropdown
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500 bg-white">
                  {item.name}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
