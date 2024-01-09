import { REVALIDATE_TIME } from "../../constants";
import { ClientComponent } from "../../components/ClientComponent";
import { api, now } from "@repo/cms/data.service";

export const revalidate = REVALIDATE_TIME;

const Page = async () => {
  const time = now();
  // const {
  //   metadata: {
  //     seo: { title },
  //   },
  // } = await cms("/isr");
  const title = (await api()).name

  return (
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
  );
};

export default Page;
