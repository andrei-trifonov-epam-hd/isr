import { api, now } from "@repo/cms/data.service";
import { ClientComponent } from "../../components/ClientComponent";

const Page = async () => {
  const time = now();
  // const {
  //   metadata: {
  //     seo: { title },
  //   },
  // } = await cms("/isr");
  const title = (await api()).name;

  return (
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
  );
};

export default Page;
