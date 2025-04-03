import AutoScrollContainer from "@/components/custom/AutoScrollContainer";
import PromptInput from "@/components/custom/PromptInput";
import UserInfo from "@/components/custom/UserInfo";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = await auth();

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return <div>Sign in to view this page</div>;
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();

  return (
    <AutoScrollContainer key={user?.id}>
      <p>Welcome, {user?.firstName}!</p>
      <p>Your email is: {user?.emailAddresses[0].emailAddress}</p>
      <p className=" bg-gray-200 p-4 rounded-lg p-2 mt-3">
        DALL·E 3 is a powerful AI image generation model that can create
        stunning images from text prompts. It is designed to understand and
        generate images based on natural language descriptions, making it easier
        for users to create unique and high-quality images without needing
        advanced design skills. With DALL·E 3, you can simply describe what you
        want to see, and the model will generate an image that matches your
        description. This opens up a world of possibilities for artists,
        designers, and anyone looking to create visual content quickly and
        easily. Whether you need an illustration for a blog post, a concept art
        for a game, or just a fun image to share on social media, DALL·E 3 can
        help you bring your ideas to life. The model is trained on a vast
        dataset of images and text, allowing it to understand the nuances of
        language and generate images that are not only visually appealing but
        also contextually relevant. This means you can use specific keywords,
        phrases, and even emotions in your prompts to guide the image generation
        process. DALL·E 3 also supports various styles and techniques, enabling
        you to create images that match your desired aesthetic.
      </p>
    </AutoScrollContainer>
  );
}
