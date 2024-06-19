import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import Link from "next/link";
import type { Node } from "@/types/rich-text-renderer";
import { SquareArrowOutUpRight, SquareArrowUpRight } from "lucide-react";

export default function RichTextRenderer(json:Node[]) {
  return serialize(json);
}

const serialize = (children: Node[]) =>
  children.map((
      node:Node,i: number
    ) => {
      if (Text.isText(node)) {
        let text = (
          <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
        );

        if (node.bold) {
          text = <strong key={i}>{text}</strong>;
        }

        if (node.code) {
          text = <code key={i}>{text}</code>;
        }

        if (node.italic) {
          text = <em key={i}>{text}</em>;
        }

        if (node.text === "") {
          text = <br />;
        }

        // Handle other leaf types here...

        return <Fragment key={i}>{text}</Fragment>;
      }

      if (!node) {
        return null;
      }

      switch (node.type) {
        case "h1":
          return (
            <h1
              style={{
                textDecoration: node.children[0].underline ? "underline" : "",
              }}
              className=" text-6xl"
              key={i}
            >
              {serialize(node.children)}
            </h1>
          );
        case "h2":
          return (
            <h2
              style={{
                textDecoration: node.children[0].underline ? "underline" : "",
              }}
              className=" text-5xl"
              key={i}
            >
              {serialize(node.children)}
            </h2>
          );
        case "h3":
          return (
            <h3
              style={{
                textDecoration: node.children[0].underline ? "underline" : "",
              }}
              className=" text-4xl"
              key={i}
            >
              {serialize(node.children)}
            </h3>
          );
        case "h4":
          return (
            <h4
              style={{
                textDecoration: node.children[0].underline ? "underline" : "",
              }}
              className=" text-3xl"
              key={i}
            >
              {serialize(node.children)}
            </h4>
          );
        case "h5":
          return (
            <h5
              style={{
                textDecoration: node.children[0].underline ? "underline" : "",
              }}
              className=" text-xl"
              key={i}
            >
              {serialize(node.children)}
            </h5>
          );
        case "h6":
          return (
            <h6
              style={{
                textDecoration: node.children[0].underline ? "underline" : "",
              }}
              className=" text-md"
              key={i}
            >
              {serialize(node.children)}
            </h6>
          );
        case "blockquote":
          return <blockquote key={i}>{serialize(node.children)}</blockquote>;
        case "ul":
          return <ul key={i}>{serialize(node.children)}</ul>;
        case "ol":
          return <ol key={i}>{serialize(node.children)}</ol>;
        case "li":
          return <li key={i}>{serialize(node.children)}</li>;
        case "link":
          return (
            <Link target="_blank" className="underline" href={escapeHTML(node.url)} key={i}>
              <button className=" inline-flex text-blue-700 hover:text-white transition-all duration-200 hover:bg-blue-700 px-1 rounded gap-2 items-center">{serialize(node.children)}<SquareArrowOutUpRight size={15}/></button>
            </Link>
          );

        default:
          return <p key={i}>{serialize(node.children)}</p>;
      }
    }
  );
