"use client";
import { Newspaper, ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import {

  Button,
} from "@nextui-org/react";

import AccordionHome from "./accordion-home";
import BentoGridHome from "./bento-grid-home";

export function HomePage() {
  return (
    <>
      <section className=" flex items-center justify-center">
        <div className="max-w-[1300px] flex items-center justify-center px-8 my-4 w-full">
          <div className="relative text-center flex flex-col overflow-hidden items-center justify-center h-[500px] rounded-2xl  py-2 gap-2 w-full text-white bg-black/40">
            <img className=" absolute size-full object-cover top-0 left-0 -z-10" src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h1 className=" text-4xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h1>
            <div className=" flex flex-col gap-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                fugit animi tenetur deleniti?
              </p>
              <div className="flex gap-2 items-center justify-center">
                  <Button href={"/products"}
                    startContent={<ShoppingBag size={15} />}
                    size="sm"
                    color="primary"
                    as={Link}
                  >
                    Visit Store
                  </Button>
                  <Button
                  as={Link}
                  href={"/posts"}
                    startContent={<Newspaper size={15} />}
                    size="sm"
                    color="secondary"
                  >
                    Check Out Blog
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex items-center justify-center">
        <div className="max-w-[1300px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
         <BentoGridHome/>
        </div>
      </section>

      <section className=" flex items-center justify-center">
        <div className="max-w-[1300px] flex items-center justify-center px-8 my-4 w-full">
          <AccordionHome />
        </div>
      </section>
    </>
  );
}
