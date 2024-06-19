import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BSWS",
  description: "About Our Goals",
};

export default function About() {
  return (
    <section className=" flex items-center justify-center">
      <div className="min-h-[60vh] max-w-[1300px] flex flex-col px-8 my-4 w-full">
        <h1 className=" text-3xl font-bold">About Us</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          quia dicta iure? Earum pariatur quas alias assumenda quasi delectus
          vel, aspernatur placeat ipsum veritatis quidem, tenetur libero ipsa
          architecto soluta ratione. Obcaecati, enim. Fugit error similique
          deserunt. Commodi, architecto at!
        </p>
      </div>
    </section>
  );
}
