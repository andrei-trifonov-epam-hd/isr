import { ClientComponent } from "../../components/ClientComponent";
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
  };
};

const Blog = ({ time, title }: { time: string; title: string }) => (
  <>
    <h1>ISR | On-Demand | Pages Router</h1>
    <Navigation />
    <div>
      <div>
        <h2>Server Component</h2>
        <div>Time: {time}</div>
        <div>Page Title: {title}</div>
      </div>
      <div>
        <ClientComponent title={title} />
      </div>
    </div>
  </>
);

export default Blog;
