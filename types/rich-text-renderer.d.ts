export type Node  = {
    bold: string;
    code: string;
    italic: string;
    url: string;
    underline: string;
    children: Node[];
    type:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "blockquote"
      | "link"
      | "li"
      | "ul"
      | "ol"
      | undefined;
}