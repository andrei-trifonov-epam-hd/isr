import { ClientComponent } from "../../components/ClientComponent";
import { REVALIDATE_TIME } from "../../constants";
import { api, now } from "@repo/cms/data.service";
import Navigation from "@repo/ui/Navigation";

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps = async () => {
  const time = now();
  // const {
  //   metadata: {
  //     seo: { title },
  //   },
  // } = await cms("/isr");
  const title = (await api()).name;

  return {
    props: { time, title },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: REVALIDATE_TIME, // In seconds
  };
};

const Blog = ({ time, title }: { time: string; title: string }) => (
  <>
    <Navigation revalidate={false} />
    <h1>ISR | Time-Based ({REVALIDATE_TIME}s) | Pages Router</h1>
    <div>
      <div>
        <h2>Server Component</h2>
        <div>Time: {time}</div>
        <div>Page Title: {title}</div>
      </div>
      <div>
        <ClientComponent />
      </div>
    </div>
  </>
);

export default Blog;
