import Image from "next/image"
import Button from "../components/Button"

const AboutPage = () => {
    const imageURL = `https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    return (
        <div className="flex flex-col items-center">
            <div className="mb-6 w-[100%] min-h-[200px] border-2 relative">
                {/* <Image src={imageURL} width={300} height={20} alt="team findr creating wireframes for a client" /> */}
                <Image src={imageURL} fill={true} alt="team findr creating wireframes for a client" className="object-cover"/>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly">
                <div className="max-w-[33%]">
                    <h1 className="text-3xl font-bold mb-6">Who are we?</h1>
                    <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
                </div>
                <div className="max-w-[33%]">
                    <h1 className="text-3xl font-bold mb-6">
                        What we do
                    </h1>
                    <p className="mb-6">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
                    <Button url="/contact" title="Contact Us" />
                </div>
            </div>
        </div>
    )
}

export default AboutPage