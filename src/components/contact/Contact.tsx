import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Blog | Travel with Catherine";
  })
  return (
    <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center p-2 gap-16 mb-10">
    <h2 className="text-4xl text-center uppercase text-black mt-6">Contact</h2>
    </article>
  )
}

export default Contact
